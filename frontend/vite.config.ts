import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/chat-app",
  plugins: [react(), tailwindcss()],
  mode: "development",
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@widgets": path.resolve(__dirname, "./src/components/widgets"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "docs",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
