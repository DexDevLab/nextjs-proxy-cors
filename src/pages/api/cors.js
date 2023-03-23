import { corsAllow } from "@/services/corsAllowApi";
var host = process.env.NEXT_PUBLIC_CORS_HOST || "localhost";
var port = process.env.NEXT_PUBLIC_CORS_PORT || 8080;

async function handler(req, res) {
  try {
    if (req.query.url) {
      const url = req.query.url;
      const addr = `${host}:${port}/${url}`;
      return res.redirect(addr);
    } else {
      return res.status(200).json({
        message:
          "Erro: req.query.url não pode ser vazio. Exemplo de requisição: 'http://localhost:3000/api/cors?url=https://www.google.com.br'",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}

export default corsAllow(handler);
