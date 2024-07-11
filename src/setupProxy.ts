

import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: { use: (arg0: string, arg1: unknown) => void; }) {
  app.use(
    '/api',
    createProxyMiddleware({
      // 👇️ Make sure to update your target
      target: 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list',
      changeOrigin: true,
    }),
  );
};