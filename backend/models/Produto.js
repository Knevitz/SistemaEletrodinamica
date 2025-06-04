const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produto = sequelize.define("Produto", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pdf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Produto;
