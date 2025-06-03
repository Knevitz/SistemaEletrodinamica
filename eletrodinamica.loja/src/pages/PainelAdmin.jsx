import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PainelAdmin = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Painel Administrativo</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Produtos</Card.Title>
              <Card.Text>Gerencie os produtos da loja virtual.</Card.Text>
              <Button
                variant="danger"
                onClick={() => navigate("/admin/produtos")}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Clientes</Card.Title>
              <Card.Text>Pesquisar clientes e visualizar cotações.</Card.Text>
              <Button
                variant="danger"
                onClick={() => navigate("/admin/clientes")}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Catálogo</Card.Title>
              <Card.Text>Atualize o catálogo de controladores.</Card.Text>
              <Button
                variant="danger"
                onClick={() => navigate("/admin/catalogo")}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PainelAdmin;
