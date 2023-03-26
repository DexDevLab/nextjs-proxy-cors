/**
 * Utilitário para dar override sobre erro do CORS com direcionamentos HTTPS.
 * Atualmente sem uso. Consta aqui apenas como referência.
 *
 * @param {Function} fn função contendo a requisição ou o objeto da rota.
 *
 * @returns função com rota já trabalhada com os headers de segurança
 */
export const apiHeaderMiddleware = (fn) => async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // INCLUIR SE NECESSÁRIO:
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