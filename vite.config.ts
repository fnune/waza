import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/waza/" : "/";
  return {
    plugins: [TanStackRouterVite(), react()],
    base,
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __BASE_PATH__: JSON.stringify(base),
    },
  };
});
