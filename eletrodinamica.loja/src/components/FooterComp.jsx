import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const FooterComp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-footer text-center text-md-start bg-dark text-white">
      <Container>
        <Row className="py-4">
          <Col md={4} className="mb-3">
            <h5>
              <strong>SOBRE NÓS</strong>
            </h5>
            <p>
              Montagem de painéis e controladores elétricos industriais, desde
              2006.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>
              <strong>NOSSO ENDEREÇO</strong>
            </h5>
            <p>
              Rua da Indústria, 212, CEP 95660-000, Centro, Três Coroas – RS –
              Brasil
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>
              <strong>CONTATO</strong>
            </h5>

            <p>
              <strong>Telefone:</strong> (51) 3546 6454
            </p>
            <p>
              <strong>WhatsApp:</strong> (51) 98557 2318
            </p>
            <p>
              <strong>E-mail:</strong> contato@eletrodinamica.com
            </p>
          </Col>
        </Row>

        <div className="text-center py-3">
          <p className="mb-0">
            &copy; {currentYear} Eletrodinâmica&reg; Automação Industrial. Todos
            os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComp;
