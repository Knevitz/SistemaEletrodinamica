import React from "react";
import { Container, Button } from "react-bootstrap";
import ImagemComTexto from "../../components/ImagemComTexto";
import ControlEletr from "../../assets/prodEletrod.jpg";
import { Link } from "react-router-dom";
import produtos from "../../data/controladores.json";
import catalogoPDF from "../../assets/pdf/Catalogo-2023-rev.7.pdf";

const Controladores = () => {
  return (
    <div>
      <Container>
        <h1 className="mb-4">Controladores e Relés Industriais</h1>
        <ImagemComTexto
          imagemSrc={ControlEletr}
          altTexto="Controladores e Relés Industriais Eletrodinâmica"
          titulo="Versatilidade e robustez"
          texto1="Os controladores e relés industriais da Eletrodinâmica® são a opção certa para o seu negócio."
          texto2="Fabricação nacional"
        />
        <p className="mb-4">
          Clique abaixo e veja detalhadamente cada produto:
        </p>

        {produtos.map((produto) => (
          <p key={produto.slug}>
            <Link
              to={`/controladores/${produto.slug}`}
              className="link-vermelho"
            >
              {produto.titulo}
            </Link>
          </p>
        ))}
        <p className="mb-4">
          <strong>Veja abaixo o catálogo Eletrodinâmica&reg;</strong>
        </p>
        <div className="mb-4">
          <Button
            variant="danger"
            href={catalogoPDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Catálogo PDF
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Controladores;
