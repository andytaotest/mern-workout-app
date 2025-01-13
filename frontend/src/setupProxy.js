const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";

  app.use(
    "/api",
    createProxyMiddleware({
      target: backendUrl,
      changeOrigin: true,
    })
  );
};
