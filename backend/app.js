const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Middlewares globais
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Limite de requisições
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

module.exports = app;
