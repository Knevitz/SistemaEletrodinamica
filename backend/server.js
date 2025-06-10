require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida.");
    return sequelize.sync(); //{ force: true }
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
  });
