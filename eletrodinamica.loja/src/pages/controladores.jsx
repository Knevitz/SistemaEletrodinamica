import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ControladorImagem from "../assets/p300.jpg"; // Adapte o caminho da imagem
import BotaoComp from "../components/BotaoComp";
import "./../App.css";

const ControladorTemperatura = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={6}>
          <img
            src={ControladorImagem}
            alt="Controlador de Temperatura P300"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2>Controlador de Temperatura P300</h2>
          <p>
            Controlador analógico de temperatura para processos industriais, com
            boa precisão e robustez. Ideal para aquecimento de equipamentos e
            manutenção de temperatura.
          </p>
          <h4>Especificações:</h4>
          <ul>
            <li>
              <strong>Modelo:</strong> P300 45-220, P300 75-220, etc.
            </li>
            <li>
              <strong>Faixa de Controle:</strong> 0 a 300ºC
            </li>
            <li>
              <strong>Sinal de Entrada:</strong> Termopar J (FeCo)
            </li>
            <li>
              <strong>Contatos de Saída:</strong> 1 contato comum e NA
            </li>
            <li>
              <strong>Tensão e Corrente Máxima:</strong> 250 VCA, Corrente de 1A
              para cargas indutivas e 3A para cargas resistivas.
            </li>
          </ul>
          <BotaoComp to="/carrinho">Adicionar ao carrinho</BotaoComp>
        </Col>
      </Row>
    </Container>
  );
};

export default ControladorTemperatura;
