const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
const { UniqueConstraintError } = require("sequelize");

const gerarToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

exports.registrar = async (req, res) => {
  const { nome, cnpj, senha, email } = req.body;

  if (!nome || !cnpj || !senha || !email) {
    console.log("Campos obrigatórios ausentes no registro");
    return res
      .status(400)
      .json({ erro: "Preencha todos os campos obrigatórios." });
  }

  try {
    let tipo;

    const cnpjLimpo = cnpj.trim();
    if (cnpjLimpo === process.env.ADMIN_CNPJ) {
      // Verifica se já existe um admin com esse CNPJ
      const adminExistente = await Usuario.findOne({
        where: { cnpj: cnpjLimpo, tipo: "admin" },
      });

      if (adminExistente) {
        console.log("Admin já existe para este CNPJ:", cnpjLimpo);
        return res
          .status(400)
          .json({ erro: "Conta de administrador já existe." });
      }

      tipo = "admin";
    } else {
      tipo = "cliente";
    }

    const hash = await bcrypt.hash(senha, 10);

    const novoUsuario = await Usuario.create({
      nome,
      cnpj,
      email,
      senha: hash,
      tipo,
    });

    console.log("Usuário registrado com sucesso:", {
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      tipo: novoUsuario.tipo,
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
    if (erro instanceof UniqueConstraintError) {
      console.error("Erro de unicidade: CNPJ ou email já existe");
      return res.status(400).json({ erro: "CNPJ ou email já está em uso" });
    }
    console.error("Erro ao registrar usuário:", erro);
    res.status(500).json({ erro: "Erro ao registrar usuário." });
  }
};

exports.login = async (req, res) => {
  const { cnpj, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { cnpj } });

    if (!usuario) {
      console.log("Login falhou: CNPJ não encontrado:", cnpj);
      return res.status(401).json({
        erro: "CNPJ não encontrado.",
      });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      console.log("Senha incorreta para CNPJ", cnpj);
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    const token = gerarToken(usuario);
    console.log("Login bem-sucedido:", usuario.nome);

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
    console.error("Erro no login:", erro);
    res.status(500).json({ erro: "Erro no login." });
  }
};

exports.verificarToken = (req, res) => {
  console.log("Token verificado com sucesso para o usuário", req.usuario?.id);
  res.status(200).json({ mensagem: "Token válido." });
};

exports.protegido = (req, res) => {
  console.log("Acesso à rota protegida autorizado", req.usuario);
  res.status(200).json({
    mensagem: "Acesso autorizado à rota protegida.",
    usuario: req.usuario,
  });
};
