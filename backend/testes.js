// testeAmbiente.js
/*require("dotenv").config(); // Carrega o .env

console.log("🔐 Verificando variáveis de ambiente...");

// Testa a variável JWT_SECRET
if (!process.env.JWT_SECRET) {
  console.error("❌ ERRO: JWT_SECRET não está definida no .env");
  process.exit(1); // Encerra com erro
}

console.log("✅ JWT_SECRET carregada com sucesso:");
console.log(process.env.JWT_SECRET); // CUIDADO: remova depois de testar

// Testa a variável JWT_EXPIRES_IN
if (!process.env.JWT_EXPIRES_IN) {
  console.error("❌ ERRO: JWT_EXPIRES_IN não está definida no .env");
  process.exit(1);
}

console.log("✅ JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN);

// Exemplo de geração de token fictício para testar
const jwt = require("jsonwebtoken");

const payload = {
  id: 1,
  tipo: "admin",
};

const token = jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

console.log("\n🔑 Token gerado de teste:");
console.log(token);*/
