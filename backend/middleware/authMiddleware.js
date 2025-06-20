const jwt = require("jsonwebtoken");

const autenticarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ erro: "Token não fornecido." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ erro: "Token inválido." });

    req.usuario = usuario;
    next();
  });
};

// Middleware adicional para garantir acesso apenas a admins
const apenasAdmin = (req, res, next) => {
  if (req.usuario.tipo !== "admin") {
    return res.status(403).json({ erro: "Acesso restrito a administradores." });
  }
  next();
};

module.exports = { autenticarToken, apenasAdmin };
