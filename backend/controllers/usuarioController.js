const Usuario = require("../models/Usuario");

exports.excluirProprioUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    // Admin não pode se excluir
    if (usuario.tipo === "admin") {
      return res
        .status(403)
        .json({ erro: "Conta de administrador não pode ser excluída." });
    }

    await usuario.destroy();
    res.status(200).json({ mensagem: "Conta excluída com sucesso." });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao excluir conta." });
  }
};

exports.adminExcluirUsuario = async (req, res) => {
  const idParaExcluir = req.params.id;

  try {
    const usuario = await Usuario.findByPk(idParaExcluir);

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    if (usuario.tipo === "admin") {
      return res
        .status(403)
        .json({ erro: "Não é permitido excluir a conta do administrador." });
    }

    await usuario.destroy();
    res.status(200).json({ mensagem: "Usuário excluído com sucesso." });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao excluir usuário." });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    // Apenas admin pode acessar essa rota
    if (req.usuario.tipo !== "admin") {
      return res.status(403).json({ erro: "Acesso não autorizado." });
    }

    const usuarios = await Usuario.findAll({
      attributes: ["id", "nome", "email", "cnpj", "tipo", "createdAt"],
    });

    res.status(200).json(usuarios);
  } catch (erro) {
    console.error("Erro ao listar usuários:", erro);
    res.status(500).json({ erro: "Erro interno ao listar usuários." });
  }
};
