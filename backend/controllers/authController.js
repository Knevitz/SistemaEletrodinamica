const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const gerarToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

exports.registrar = async (req, res) => {
  const { nome, cnpj, senha } = req.body;

  try {
    let tipo = "cliente";

    // Impedir múltiplos admins
    if (cnpj === process.env.ADMIN_CNPJ) {
      const adminExistente = await Usuario.findOne({
        where: { cnpj, tipo: "admin" },
      });
      if (adminExistente) {
        return res
          .status(400)
          .json({ erro: "Conta de administrador já existe." });
      }
      tipo = "admin";
    }

    const hash = await bcrypt.hash(senha, 10);

    const novoUsuario = await Usuario.create({
      nome,
      cnpj,
      senha: hash,
      tipo,
    });

    res.status(201).json({
      mensagem: "Usuário registrado com sucesso.",
      usuario: {
        id: novoUsuario.id,
        nome: novoUsuario.nome,
        cnpj: novoUsuario.cnpj,
        tipo: novoUsuario.tipo,
      },
    });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao registrar usuário." });
  }
};

exports.login = async (req, res) => {
  const { cnpj, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { cnpj } });

    if (!usuario) {
      return res.status(401).json({ erro: "CNPJ não encontrado." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    const token = gerarToken(usuario);

    res.status(200).json({
      mensagem: "Login realizado com sucesso.",
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        tipo: usuario.tipo,
      },
    });
  } catch (erro) {
    res.status(500).json({ erro: "Erro no login." });
  }
};

exports.verificarToken = (req, res) => {
  res.status(200).json({ mensagem: "Token válido." });
};

exports.protegido = (req, res) => {
  res.status(200).json({
    mensagem: "Acesso autorizado à rota protegida.",
    usuario: req.usuario,
  });
};
