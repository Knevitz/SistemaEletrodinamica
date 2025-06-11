const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
const nodemailer = require("nodemailer");
const { UniqueConstraintError } = require("sequelize");

const gerarToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

const registrar = async (req, res) => {
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

const login = async (req, res) => {
  const { cnpj, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { cnpj } });

    if (!usuario) {
      console.log("Login falhou: CNPJ não encontrado:", cnpj);
      return res.status(401).json({ erro: "CNPJ não encontrado." });
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

const verificarToken = (req, res) => {
  console.log("Token verificado com sucesso para o usuário", req.usuario?.id);
  res.status(200).json({ mensagem: "Token válido." });
};

const protegido = (req, res) => {
  console.log("Acesso à rota protegida autorizado", req.usuario);
  res.status(200).json({
    mensagem: "Acesso autorizado à rota protegida.",
    usuario: req.usuario,
  });
};

const recuperarSenha = async (req, res) => {
  const { email } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REDEFINIR_SENHA,
    });

    const link = `${process.env.FRONTEND_URL}/redefinir-senha?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Eletrodinâmica" <${process.env.EMAIL_FROM}>`,
      to: usuario.email,
      subject: "Recuperação de Senha",
      html: `
        <p>Olá, ${usuario.nome}!</p>
        <p>Você solicitou a redefinição de sua senha. Clique no link abaixo para continuar:</p>
        <a href="${link}">${link}</a>
        <p>Este link expira em 30 minutos.</p>
      `,
    });

    return res.json({ mensagem: "E-mail de recuperação enviado com sucesso." });
  } catch (erro) {
    console.error(erro);
    return res
      .status(500)
      .json({ mensagem: "Erro ao tentar recuperar a senha." });
  }
};

const redefinirSenha = async (req, res) => {
  const { token, novaSenha } = req.body;

  if (!token || !novaSenha) {
    return res
      .status(400)
      .json({ mensagem: "Token e nova senha são obrigatórios." });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuarioId = decoded.id;

    // Verifica se o usuário ainda existe
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    // Criptografa a nova senha
    const senhaCriptografada = await bcrypt.hash(novaSenha, 10);

    // Atualiza a senha no banco
    usuario.senha = senhaCriptografada;
    await usuario.save();

    return res.json({ mensagem: "Senha redefinida com sucesso." });
  } catch (erro) {
    console.error(erro);
    return res.status(400).json({ mensagem: "Token inválido ou expirado." });
  }
};
// Exports organizados
exports.registrar = registrar;
exports.login = login;
exports.verificarToken = verificarToken;
exports.protegido = protegido;
exports.recuperarSenha = recuperarSenha;
exports.redefinirSenha = redefinirSenha;
