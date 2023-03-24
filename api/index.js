// Pinboard API proxy.
// For whatever reason the Pinboard API (https://pinboard.in/howto/#api) doesn't
// have CORS enabled — so you can't make API calls directly from the browser.
// This small server proxies requests to the Pinboard API allowing CORS.

// Create a proxy to redirect requests of the "/api/*" path to the Pinboard API.
// Examples:
// GET /api/v1/posts/all?format=json → https://api.pinboard.in/v1/posts/all?format=json
import { createProxyMiddleware } from "http-proxy-middleware";
import NextCors from "nextjs-cors";

const apiProxy = createProxyMiddleware(url, {
  target: url,
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes(proxyRes) {
    (proxyRes.headers["access-control-allow-origin"] = "*"),
      (proxyRes.headers["access-control-allow-methods"] =
        "DELETE, POST, GET, OPTIONS, PUT, PATCH"),
      (proxyRes.headers["access-control-allow-headers"] =
        "Origin, X-Requested-With, Content-Type, Accept");
  },
});

export default async function (req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  return apiProxy(req.query.url, req, res);
}
