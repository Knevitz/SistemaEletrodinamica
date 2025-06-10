const sequelize = require("../config/database");
const Usuario = require("./Usuario");
const Categoria = require("./Categoria");
const Produto = require("./Produto");

// Associações
Categoria.hasMany(Produto, { foreignKey: "categoriaId", as: "produtos" });
Produto.belongsTo(Categoria, { foreignKey: "categoriaId", as: "categoria" });

module.exports = {
  sequelize,
  Usuario,
  Categoria,
  Produto,
};
