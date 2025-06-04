const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const {
  autenticarToken,
  apenasAdmin,
} = require("../middleware/authMiddleware");

router.post("/registrar", authController.registrar);
router.post("/login", authController.login);
router.get("/verificar-token", authController.verificarToken);
router.get("/protegido", autenticarToken, authController.protegido);

router.get("/admin", autenticarToken, apenasAdmin, (req, res) => {
  res.status(200).json({ mensagem: "Bem-vindo, administrador!" });
});
module.exports = router;
