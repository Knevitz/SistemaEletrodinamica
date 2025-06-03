import { useParams } from "react-router-dom";
import produtos from "../../data/controladores.json";
import { Table } from "react-bootstrap";
import "../../App.css";
import imagens from "../../data/images";
import manuais from "../../data/manuals";

const ProdutoDetalhe = () => {
  const { slug } = useParams();
  const produto = produtos.find((p) => p.slug === slug);

  if (!produto) return <p>Produto não encontrado.</p>;

  // Aqui usamos a imagem importada via o arquivo images.js, usando o slug do produto
  const imagemSrc = imagens[slug];

  return (
    <div className="produto-detalhe container my-5">
      <h1 className="mb-4">
        <strong>{produto.titulo}</strong>
      </h1>

      <div className="row mb-4">
        <div className="col-12 col-md-5">
          <img
            src={imagemSrc}
            alt={produto.titulo}
            className="img-fluid img-tamanho-unico"
          />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <p className="m-0">
            <strong>{produto.indicacao.titulo}</strong>{" "}
            {produto.indicacao.descricao}
          </p>
        </div>
      </div>

      <Table striped bordered responsive className="mb-4">
        <thead>
          <tr>
            {produto.especificacoes[0].map((coluna, i) => (
              <th key={i}>{coluna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {produto.especificacoes.slice(1).map((linha, i) => (
            <tr key={i}>
              {linha.map((valor, j) => (
                <td key={j}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {(manuais[produto.manualPdfKey] || manuais[produto.manualPdf1Key]) && (
        <div className="mb-4">
          {produto.manualTitulo && (
            <p className="fw-bold">{produto.manualTitulo}</p>
          )}
          <div className="d-flex flex-column flex-md-row gap-3">
            {manuais[produto.manualPdfKey] && (
              <a
                href={manuais[produto.manualPdfKey]}
                className="btn btn-danger"
                target="_blank"
                rel="noopener noreferrer"
              >
                {produto.manualPdfTitulo || "Manual 1"}
              </a>
            )}
            {manuais[produto.manualPdf1Key] && (
              <a
                href={manuais[produto.manualPdf1Key]}
                className="btn btn-danger"
                target="_blank"
                rel="noopener noreferrer"
              >
                {produto.manualPdf1Titulo || "Manual 2"}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdutoDetalhe;
