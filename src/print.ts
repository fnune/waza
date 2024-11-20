import { execSync, spawn } from "node:child_process";
import { existsSync } from "node:fs";
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

import { unlinkSync } from "node:fs";

async function normalizePDF(output: string) {
  const tempFile = (index: number) => `${output}.tmp.${index.toString()}`;

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
    const inputFile = index === 0 ? output : tempFile(index - 1);
    const outputFile = tempFile(index);

    await prevPromise;

    return new Promise<void>((resolve, reject) => {
      const cpdfProcess = spawn("cpdf", [...args, inputFile, "-o", outputFile]);

      cpdfProcess.stderr.on("data", (data: unknown) => {
        console.error(`cpdf error: ${data as string}`);
      });

      cpdfProcess.on("close", (code: number) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`cpdf exited with code ${code.toString()}`));
        }
      });
    });
  }, Promise.resolve());

  const finalTempFile = tempFile(modifications.length - 1);
  const mvProcess = spawn("mv", [finalTempFile, output]);

  await new Promise<void>((resolve, reject) => {
    mvProcess.on("close", (code: number) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`mv exited with code ${code.toString()}`));
      }
    });
  });

  for (let i = 0; i < modifications.length - 1; i++) {
    unlinkSync(tempFile(i));
  }

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
  }
}

for (const locale of locales) {
  void print(locale);
}
