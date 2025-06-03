import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap"; // Para os componentes de layout e alerta
import BotaoComp from "../components/BotaoComp";
import "./../App.css";

const Carrinho = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Alert variant="warning">
            <h4>Nenhum produto no carrinho</h4>
            <p>
              O seu carrinho está vazio. Adicione produtos ao carrinho para
              continuar a cotação.
            </p>
            <BotaoComp to="/">
              <strong>Voltar a página inicial</strong>
            </BotaoComp>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrinho;
