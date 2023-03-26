import { createProxyMiddleware } from "http-proxy-middleware";
import NextCors from "nextjs-cors";
import apiRateLimit from "services/apiRateLimit";

/**
 * Variáveis de ambiente que definem o funcionamento do limitador de acesso
 * (Rate Limit).
 *
 * NEXT_PUBLIC_RATE_LIMIT_REQUESTS = Quantidade específica de requisições
 * que podem ser feitas em um determinado intervalo.
 *
 * NEXT_PUBLIC_RATE_LIMIT_INTERVAL = O intervalo em segundos em que a
 * quantidade de requisições são redefinidas. Por exemplo,
 * NEXT_PUBLIC_RATE_LIMIT_REQUESTS = 30 e
 * NEXT_PUBLIC_RATE_LIMIT_INTERVAL = 60 significam 30 requisições a
 * cada 60 segundos, no máximo.
 *
 * NEXT_PUBLIC_RATE_LIMIT_USERS =  A quantidade de usuários que
 * podem fazer requisições por intervalo. Por exemplo,
 * NEXT_PUBLIC_RATE_LIMIT_INTERVAL = 60 e
 * NEXT_PUBLIC_RATE_LIMIT_USERS = 50 significam um máximo
 * de 50 diferentes usuários requisitando a cada 60 segundos.
 */
const requests = parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT_REQUESTS);
const interval = parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT_INTERVAL);
const users = parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT_USERS);

/**
 * Método que elabora o Proxy como um middleware e redireciona as
 * requisições.
 */
const apiProxy = createProxyMiddleware({
  // target: "https://http.cat",
  changeOrigin: true,
  pathRewrite: {
    "^/api/cors": "",
  },
  router: (req) => req.query["url"],
  onProxyRes(proxyRes) {
    (proxyRes.headers["access-control-allow-origin"] = "*"),
      (proxyRes.headers["access-control-allow-methods"] =
        "DELETE, POST, GET, OPTIONS, PUT, PATCH"),
      (proxyRes.headers["access-control-allow-headers"] =
        "Origin, X-Requested-With, Content-Type, Accept");
  },
});

/**
 * Define os parâmetros para os tempos e os intervalos para permissão
 * de acesso aos dados.
 */
const limiter = apiRateLimit({
  interval: interval * 1000, // x * 1000 milisegundos
  uniqueTokenPerInterval: users, // máximo x usuários por intervalo
});


/**
 * Handler principal da requisição ao Proxy.
 *
 * @param {*} req HTTP Request.
 *
 * @param {*} res HTTP Response.
 *
 * @returns Essa função não realiza retorno pela API.
 */
async function handler(req, res) {
  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200,
    });
    await limiter.check(res, requests, "CACHE_TOKEN"); // máximo de x solicitações dentro do intervalo
    apiProxy(req, res);
  } catch (error) {
    if (error) {
    } else {
      console.log("Excedido o número de tentativas (Rate Limit).");
      return res.status(429).json({
        error: "Rate Limit",
        message: "Excedido o número de tentativas para essa solicitação.",
      });
    }
  }
}
export default handler;

// CONFIGURAÇÕES ESPECÍFICAS DE ROTA
export const config = {
  api: {
    externalResolver: true,
    bodyParser: false, // ANULA NECESSIDADE DE O NEXT JS REQUERER RESPOSTA NA API
  },
};
