const { Categoria } = require("../models");
const slugify = require("../utils/slugify");

// Criar nova categoria
exports.criarCategoria = async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ erro: "Nome é obrigatório" });
    }
    const slug = slugify(nome);

    const categoria = await Categoria.create({ nome, slug });
    return res.status(201).json(categoria);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    return res.status(500).json({ erro: "Erro ao criar categoria:" });
  }
};

// Listar todas categorias
exports.listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    return res.json(categorias);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao listar categorias." });
  }
};

// Atualizar categoria
exports.atualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;

    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ erro: "Categoria não encontrada." });
    }
    if (nome) {
      categoria.nome = nome;
      categoria.slug = slugify(nome);
    }

    await categoria.save();

    return res.json(categoria);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao atualizar categoria." });
  }
};

// Excluir categoria
exports.excluirCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ erro: "Categoria não encontrada." });
    }

    await categoria.destroy();

    return res.json({ mensagem: "Categoria excluída com sucesso." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao excluir categoria." });
  }
};
