const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // SERVER
      // target: 'http://client78958.golpik.net:3048',
      target: "https://b8b0-2400-adc1-1df-f800-792e-2fff-30cf-c2f4.ngrok-free.app",
      // LOCAL
      // target: 'http://apidarkhorse.192.168.100.24.nip.io',
      changeOrigin: true,
    })
  );
};
