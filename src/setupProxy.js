const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // SERVER
      // target: 'http://client78958.golpik.net:3048',
      target: "https://9fe5-111-88-26-244.ngrok-free.app/docs/",
      // LOCAL
      // target: 'http://apidarkhorse.192.168.100.24.nip.io',
      changeOrigin: true,
    })
  );
};
