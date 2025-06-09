import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./",
  base: "/GraProject/",
  server: {
    port: 3000,
    hot: true,
  },
  build: {
    outDir: "docs",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "Catalog.html"),
        About: resolve(__dirname, "AboutCompany.html"),
        Objects: resolve(__dirname, "Objects.html"),
      },
    },
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
});
