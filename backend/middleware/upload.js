const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Diretório de destino
const uploadDir = path.join(__dirname, "..", "uploads");

// Cria a pasta uploads/ se não existir
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const random = Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = `${timestamp}-${random}${ext}`;
    cb(null, filename);
  },
});

// Filtro para tipos de arquivos permitidos
function fileFilter(req, file, cb) {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Apenas imagens (JPEG, PNG, GIF) e PDFs são permitidos."));
  }
}

// Configuração do upload
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

module.exports = upload;
