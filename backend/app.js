require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const sequelize = require("./config/database");
const usuarioRoutes = require("./routes/usuarios");
const authRoutes = require("./routes/auth");

const app = express();

// Middlewares globais
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/usuarios", usuarioRoutes);

// Rate limiting contra ataques DDoS
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Rotas
app.use("/api/auth", authRoutes);

// Teste de conexão com o banco
sequelize
  .authenticate()
  .then(() => console.log("Banco de dados conectado com sucesso"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = app;
