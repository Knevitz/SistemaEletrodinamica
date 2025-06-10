const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, "catalogo.pdf");
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Apenas PDFs são permitidos"), false);
};

module.exports = multer({ storage, fileFilter });
