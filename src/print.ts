import { execSync, spawn } from "node:child_process";
import { existsSync, unlinkSync } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";
import { type ViteDevServer, createServer } from "vite";

import type { Locales } from "./locales/i18n-types";
import { locales } from "./locales/i18n-util";

function getChromiumPath(): string | null {
  try {
    const command =
      process.platform === "win32"
        ? "where chrome"
        : "which chromium || which google-chrome || which google-chrome-stable";
    const result = execSync(command, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return result.split("\n")[0];
  } catch {
    console.error("Chromium not found. Ensure it is installed and in your PATH.");
    return null;
  }
}

async function waitForFile(filePath: string) {
  for (let retries = 5; retries > 0; retries--) {
    try {
      await fs.stat(filePath);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  throw new Error(`File not ready: ${filePath}`);
}

async function normalizePDF(output: string) {
  const tempDir = path.join(path.dirname(output), `.temp-${path.basename(output, ".pdf")}`);
  await fs.mkdir(tempDir, { recursive: true });
  const tempFile = (index: number) => path.join(tempDir, `temp-${index.toString()}.pdf`);

  const modifications = [
    ["-set-creator", ""],
    ["-set-author", "Fausto Núñez Alberro"],
    ["-set-title", "Waza"],
    ["-set-keywords", "MIT License"],
    ["-set-producer", "MIT License"],
    ["-set-create", "D:19700101000000Z"],
    ["-set-modify", "D:19700101000000Z"],
  ];

  await modifications.reduce(async (prevPromise, args, index) => {
    await prevPromise;

    const cpdfInput = index === 0 ? output : tempFile(index - 1);
    const cpdfOutput = tempFile(index);

    await waitForFile(cpdfInput);

    return new Promise<void>((resolve, reject) => {
      const cpdfArgs = [...args, cpdfInput, "-o", cpdfOutput, "-gs-malformed"];
      console.log(`Running: cpdf ${cpdfArgs.join(" ")}`);

      const cpdfProcess = spawn("cpdf", cpdfArgs);

      cpdfProcess.stderr.on("data", (data) => {
        console.error("cpdf error: ", data);
      });

      cpdfProcess.on("close", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`cpdf exited with code ${code?.toString() ?? "<null>"}`));
      });
    });
  }, Promise.resolve());

  await fs.rename(tempFile(modifications.length - 1), output);
  await fs.rm(tempDir, { recursive: true, force: true });
  console.log(`PDF metadata normalized for ${output}`);
}

async function print(language: Locales) {
  let server: ViteDevServer | null = null;
  const output = `./public/waza-${language}.pdf`;
  const port = 5172;

  const chromiumPath = getChromiumPath();
  if (!chromiumPath || !existsSync(chromiumPath)) {
    console.error("Chromium binary could not be located.");
    return;
  }

  try {
    server = await createServer();
    await server.listen(port);
    const url = `http://localhost:${port.toString()}?language=${language}`;
    console.log(`Vite dev server running at ${url}`);

    const chromeProcess = spawn(chromiumPath, [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${path.resolve(output)}`,
      "--no-pdf-header-footer",
      "--disable-pdf-tagging",
      url,
    ]);

    chromeProcess.stdout.on("data", (data: unknown) => {
      console.log(`Chromium [1]: ${data as string}`);
    });

    chromeProcess.stderr.on("data", (data: unknown) => {
      console.log(`Chromium [2]: ${data as string}`);
    });

    await new Promise<void>((resolve, reject) => {
      chromeProcess.on("close", (code: number) => {
        if (code === 0) {
          console.log(`PDF saved to ${output}`);
          resolve();
        } else {
          reject(new Error(`Chromium exited with code ${code.toString()}`));
        }
      });
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    process.exit(1);
  } finally {
    if (server) {
      await server.close();
      console.log("Vite server closed.");
    }
  }

  try {
    await normalizePDF(output);
  } catch (error) {
    console.error("Error normalizing PDF:", error);
    process.exit(1);
  }
}

await Promise.all(locales.map((locale) => print(locale)));
