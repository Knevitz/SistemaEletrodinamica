const slugify = (texto) => {
  if (!texto) return "";
  return texto
    .toString()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // remove caracteres especiais
    .replace(/\s+/g, "-") // substitui espaços por hífen
    .replace(/-+/g, "-"); // remove múltiplos hífens
};

module.exports = slugify;
