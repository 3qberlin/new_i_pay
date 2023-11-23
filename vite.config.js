const path = require('path');
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/new_i_pay/' : '/',
  root: path.resolve(__dirname, ''),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    open: 'index.html',
  },
  plugins: [
    ViteEjsPlugin(),
  ], optimizeDeps: {
    entries: [],
  }
});