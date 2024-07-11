import { urlData } from './src/halpers/accessData';
import { defineConfig } from "vite";
//import proxy from "vite-plugin-proxy";
import react from "@vitejs/plugin-react";
import sass from "sass";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/list": {
        target: urlData,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData:
          "@import 'src/styles/mixins.scss'; @import 'src/styles/variables.scss';",
      },
    },
  },
});
