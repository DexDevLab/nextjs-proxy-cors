import rateLimit from "express-rate-limit";

const hours = 24;
const limit = 5;

export const apiRateLimit = (fn) => async (req, res) => {
  rateLimit({
    windowMs: hours * 60 * 60 * 1000,
    max: limit,
    message: `Você excedeu o limite de ${limit} a cada ${hours} horas!`,
    standardHeaders: true,
    legacyHeaders: true,
  });

  return await fn(req, res);
};
