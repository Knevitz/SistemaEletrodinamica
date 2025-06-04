const express = require("express");
const router = express.Router();
const {
  autenticarToken,
  apenasAdmin,
} = require("../middleware/authMiddleware");
const usuarioController = require("../controllers/usuarioController");

// Cliente exclui a própria conta
router.delete("/me", autenticarToken, usuarioController.excluirProprioUsuario);

// Admin exclui qualquer cliente (exceto o admin)
router.delete(
  "/:id",
  autenticarToken,
  apenasAdmin,
  usuarioController.adminExcluirUsuario
);

module.exports = router;
