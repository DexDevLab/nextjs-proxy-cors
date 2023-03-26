import { createProxyMiddleware } from "http-proxy-middleware";
import NextCors from "nextjs-cors";
import { apiRateLimit } from "services/apiRateLimit";
const apiProxy = createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  router: (req) => customRouter(req),
  onProxyRes(proxyRes) {
    (proxyRes.headers["access-control-allow-origin"] = "*"),
      (proxyRes.headers["access-control-allow-methods"] =
        "DELETE, POST, GET, OPTIONS, PUT, PATCH"),
      (proxyRes.headers["access-control-allow-headers"] =
        "Origin, X-Requested-With, Content-Type, Accept");
  },
});

const customRouter = function (req) {
  const url = req.query["url"];
  return url;
};

async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  apiProxy(req, res);
}

export default apiRateLimit(handler);

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
