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
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@widgets": path.resolve(__dirname, "./src/components/widgets"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
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
