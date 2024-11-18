import { execSync, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { type ViteDevServer, createServer } from "vite";

function getChromiumPath(): string | null {
  try {
    const command =
      process.platform === "win32"
        ? "where chrome"
        : "which chromium || which google-chrome || which google-chrome-stable";
    const result = execSync(command, { encoding: "utf8" }).trim();
    return result.split("\n")[0];
  } catch {
    console.error("Chromium not found. Ensure it is installed and in your PATH.");
    return null;
  }
}

async function print() {
  let server: ViteDevServer | null = null;
  const outputPath = "waza-en.pdf";
  const port = 5172;

  const chromiumPath = getChromiumPath();
  if (!chromiumPath || !existsSync(chromiumPath)) {
    console.error("Chromium binary could not be located.");
    return;
  }

  try {
    server = await createServer();
    await server.listen(port);
    const url = `http://localhost:${port.toString()}/`;
    console.log(`Vite dev server running at ${url}`);

    const chromeProcess = spawn(chromiumPath, [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${path.resolve(outputPath)}`,
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

    chromeProcess.on("close", (code: unknown) => {
      if (code === 0) {
        console.log(`PDF saved to ${outputPath}`);
      } else {
        console.log(`Chromium exited with code ${code as string}`);
      }
    });

    await new Promise((resolve) => chromeProcess.on("exit", resolve));
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    if (server) {
      await server.close();
      console.log("Vite server closed.");
    }
  }
}

void print();