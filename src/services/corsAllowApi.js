/**
 * Utilitário para dar override sobre erro do CORS com direcionamentos HTTP.
 * @param {Function} fn função contendo a requisição ou o objeto da rota.
 * @returns {Function} rota já trabalhada com os headers de segurança
 */
const corsAllow = (fn) => async (req, res) => {
  if (!process.env.NEXT_PUBLIC_CORS_STATE) {
    console.log("Servidor interno CORS offline. Iniciando servidor...");
    const corsServer = require("./corsServerInit");
    corsServer;
  }
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

export { corsAllow };
