// routes/catalogo.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const upload = require("../middleware/uploadCatalogo");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/", auth.isAdmin, upload.single("catalogo"), async (req, res) => {
  const catalogoPath = path.join(__dirname, "..", "uploads", "catalogo.pdf");

  try {
    if (fs.existsSync(catalogoPath)) {
      fs.unlinkSync(catalogoPath);
    }
    fs.renameSync(req.file.path, catalogoPath);
    res.status(200).json({ mensagem: "Catálogo atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar catálogo." });
  }
});

module.exports = router;
