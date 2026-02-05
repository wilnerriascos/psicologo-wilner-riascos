import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// ✅ Standard/portable project root in Node ESM (works on Vercel)
const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = path.join(PROJECT_ROOT, "client");

export default defineConfig({
  root: CLIENT_DIR,
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(CLIENT_DIR, "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  envDir: PROJECT_ROOT,
});
