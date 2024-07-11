import { defineConfig } from "vite";
//import proxy from "vite-plugin-proxy";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/list": {
        target:
          "https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/",
        changeOrigin: true,
        //secure: false,
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
