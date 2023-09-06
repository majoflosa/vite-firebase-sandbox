import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: './dist',
    assetsDir: './assets',
    // delete, comment out, or change minify to true for prod
    minify: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        a: 'page-a.html',
        b: 'page-b.html',
        // a: 'src/js/page-a/indexA.js',
        // b: 'src/js/page-b/indexB.js',
      },
      output: {
        // dir: 'dist/js/',
        assetFileNames: '[ext]/asset-[name].[ext]',
        entryFileNames: 'js/entry-[name]-[hash].js',
      }
    },
  }
})