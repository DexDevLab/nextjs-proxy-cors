import LRU from "lru-cache";

/**
 * Função que define headers para indicar se uma requisição foi realizada,
 * marcando o header dependendo da quantidade de requisições.
 *
 * @param {*} options Opções e critérios para limitar o acesso.
 *
 * @returns Retorna o resto da requisição como uma Promise.
 */
function apiRateLimit(options) {
  const tokenCache = new LRU({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (res, limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
}

export default apiRateLimit;
