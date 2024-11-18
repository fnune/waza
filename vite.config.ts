import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [TanStackRouterVite(), react()],
  base: mode === "production" ? "/waza/" : "/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
}));
