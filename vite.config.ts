import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // https://pglite.dev/docs/bundler-support#vite
    exclude: ["@electric-sql/pglite"],
  },
});
