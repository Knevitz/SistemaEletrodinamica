const sequelize = require("../config/database");
const Usuario = require("./Usuario");
const Produto = require("./Produto");

// Se precisar, adicione associações aqui no futuro
// Ex: Produto.belongsTo(Categoria)

module.exports = {
  sequelize,
  Usuario,
  Produto,
};
