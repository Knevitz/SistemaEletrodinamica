const Produto = require("../models/Produto");
const path = require("path");
const fs = require("fs");
const slugify = require("../utils/slugify");

// Função auxiliar para deletar arquivos antigos
const deletarArquivoSeExistir = (caminho) => {
  if (fs.existsSync(caminho)) {
    fs.unlinkSync(caminho);
  }
};

// Criar produto
exports.criarProduto = async (req, res) => {
  const { nome, descricao, categoriaId } = req.body;
  const imagem = req.files?.imagem?.[0]?.filename || null;
  const pdf = req.files?.pdf?.[0]?.filename || null;
  const slug = slugify(nome);

  try {
    const novoProduto = await Produto.create({
      nome,
      descricao,
      categoriaId,
      imagem,
      pdf,
      slug,
    });
    res.status(201).json(novoProduto);
  } catch (erro) {
    console.error("Erro ao criar produto:", erro);
    res.status(500).json({ erro: "Erro ao criar produto." });
  }
};

// Atualizar produto
exports.atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, ativo, categoriaId } = req.body;

  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Atualizar imagem
    if (req.files?.imagem?.[0]) {
      if (produto.imagem) {
        deletarArquivoSeExistir(
          path.join(__dirname, "..", "uploads", produto.imagem)
        );
      }
      produto.imagem = req.files.imagem[0].filename;
    }

    // Atualizar PDF
    if (req.files?.pdf?.[0]) {
      if (produto.pdf) {
        deletarArquivoSeExistir(
          path.join(__dirname, "..", "uploads", produto.pdf)
        );
      }
      produto.pdf = req.files.pdf[0].filename;
    }

    // Atualizar dados textuais
    if (nome && nome !== produto.nome) {
      produto.nome = nome;
      produto.slug = slugify(nome);
    }
    // Atualize a categoria se foi enviada
    if (categoriaId !== undefined) {
      produto.categoriaId = categoriaId;
    }

    produto.descricao = descricao ?? produto.descricao;
    produto.ativo = ativo !== undefined ? ativo : produto.ativo;

    await produto.save();
    res.status(200).json(produto);
  } catch (erro) {
    console.error("Erro ao atualizar produto:", erro);
    res
      .status(500)
      .json({
        erro: "Erro ao atualizar produto.",
        erro: "Erro ao atualizar produto.",
        detalhes: erro.message,
      });
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

    // Remover arquivos se existirem
    if (produto.imagem) {
      deletarArquivoSeExistir(
        path.join(__dirname, "..", "uploads", produto.imagem)
      );
    }
    if (produto.pdf) {
      deletarArquivoSeExistir(
        path.join(__dirname, "..", "uploads", produto.pdf)
      );
    }

    await produto.destroy();
    res.status(200).json({ mensagem: "Produto excluído com sucesso." });
  } catch (erro) {
    console.error("Erro ao excluir produto:", erro);
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
    console.error("Erro ao listar produtos ativos:", erro);
    res.status(500).json({ erro: "Erro ao buscar produtos." });
  }
};
