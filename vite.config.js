import { defineConfig } from "vite";
import { resolve } from "path";
import string from "vite-plugin-string";

export default defineConfig({
  root: "./",
  base: "/GraProject/",
  server: {
    port: 3000,
    hot: true,
    proxy: {
      "/submit": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "docs",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      input: {
        Main: resolve(__dirname, "index.html"),
        Catalog: resolve(__dirname, "Catalog.html"),
        About: resolve(__dirname, "AboutCompany.html"),
        Objects: resolve(__dirname, "Objects.html"),
        Blog: resolve(__dirname, "Blog.html"),
        Contact: resolve(__dirname, "Contact.html"),
        ObjectPages: resolve(__dirname, "ObjectPages.html"),
        ProducrCard: resolve(__dirname, "ProductCard.html"),
        BlogPages: resolve(__dirname, "BlogPages.html"),
      },
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
  plugins: [
    string({
      include: ['templates/**/*.html'],
    }),
  ],
});
