const Produto = require("../models/Produto");
const path = require("path");
const fs = require("fs");

// Criar produto
exports.criarProduto = async (req, res) => {
  const { nome, descricao } = req.body;
  try {
    const novoProduto = await Produto.create({ nome, descricao });
    res.status(201).json(novoProduto);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao criar produto." });
  }
};

// Atualizar produto
exports.atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, ativo } = req.body;

  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado." });
    }

    produto.nome = nome || produto.nome;
    produto.descricao = descricao || produto.descricao;
    produto.ativo = ativo !== undefined ? ativo : produto.ativo;

    await produto.save();
    res.status(200).json(produto);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao atualizar produto." });
  }
};

// Excluir produto
exports.excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Remover arquivos associados (imagem e pdf)
    if (produto.imagem) {
      fs.unlink(
        path.join(__dirname, "..", "uploads", produto.imagem),
        () => {}
      );
    }
    if (produto.pdf) {
      fs.unlink(path.join(__dirname, "..", "uploads", produto.pdf), () => {});
    }

    await produto.destroy();
    res.status(200).json({ mensagem: "Produto excluído com sucesso." });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao excluir produto." });
  }
};

// Listar produtos ativos (público)
exports.listarProdutosAtivos = async (req, res) => {
  try {
    const produtos = await Produto.findAll({
      where: { ativo: true },
    });
    res.status(200).json(produtos);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar produtos." });
  }
};
