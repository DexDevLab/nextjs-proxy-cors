require("dotenv").config();

var host = process.env.NEXT_PUBLIC_CORS_HOST || "0.0.0.0";
var port = process.env.NEXT_PUBLIC_CORS_PORT || 8080;
var originBlacklist = parseEnvList(process.env.NEXT_PUBLIC_CORS_BLACKLIST);
var originWhitelist = parseEnvList(process.env.NEXT_PUBLIC_CORS_WHITELIST);

function parseEnvList(env) {
  if (!env) {
    return [];
  }
  return env.split(",");
}

var checkRateLimit = require("./corsRateLimit")(
  process.env.NEXT_PUBLIC_CORS_RATELIMIT
);

var cors_proxy = require("./corsServer");
cors_proxy
  .createServer({
    originBlacklist: originBlacklist,
    originWhitelist: originWhitelist,
    requireHeader: ["origin", "x-requested-with"],
    checkRateLimit: checkRateLimit,
    removeHeaders: [
      "cookie",
      "cookie2",
      // Strip Heroku-specific headers
      "x-request-start",
      "x-request-id",
      "via",
      "connect-time",
      "total-route-time",
      // Other Heroku added debug headers
      // 'x-forwarded-for',
      // 'x-forwarded-proto',
      // 'x-forwarded-port',
    ],
    redirectSameOrigin: true,
    httpProxyOptions: {
      // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
      xfwd: false,
    },
  })
  .listen(port, host, function () {
    console.log("Executando servidor interno CORS em " + host + ":" + port);
  });
