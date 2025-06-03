import React, { useEffect, useState } from "react";
import { Card, Row, Col, Carousel, Container } from "react-bootstrap";
import BotaoComp from "../components/BotaoComp";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Aqui futuramente chamar API backend que retorna os produtos ativos
    // Exemplo simulado:
    const produtosAPI = [
      {
        id: 1,
        nome: "Relés de Estado Sólido",
        imagem: "/imagens/reles-industriais.jpg", // ideal imagem pública ou url externa
        rota: "/EstadoSolido",
      },
      {
        id: 2,
        nome: "Controladores Analógicos",
        imagem: "/imagens/p300.jpg",
        rota: "/controladores",
      },
      {
        id: 3,
        nome: "Temporizadores Digitais",
        imagem: "/imagens/digital.png",
        rota: "/TemporizadorDigital",
      },
    ];
    setProdutos(produtosAPI);
  }, []);

  return (
    <Container className="text-center mt-4">
      {/* Carousel poderia ser dinâmico também, seguindo lógica similar */}
      <h2 className="mb-4">Confira nossos Produtos</h2>
      <Row className="mb-4">
        {produtos.map((produto) => (
          <Col md={4} key={produto.id}>
            <Card>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <BotaoComp to={produto.rota}>Ver Produtos</BotaoComp>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
