import React from "react";
import BotaoComp from "../components/BotaoComp";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Contato = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Entre em contato</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMensagem">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Sua mensagem" />
            </Form.Group>
            <div className="mb-4">
              <BotaoComp type="submit">Enviar</BotaoComp>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          <h4>Informações de contato</h4>
          <p>
            <strong>Email:</strong>
            <a href="mailto:contato@eletrodinamica.com" className="text-danger">
              contato@eletrodinamica.com
            </a>
          </p>
          <p>
            <strong>Telefone:</strong>
            <a href="tel:+555135466454" className="text-danger">
              (51) 3546-6454
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <Button
              variant="success"
              href="https://wa.me/555135466454"
              target="_blank"
              className="btn-whatsapp"
            >
              Iniciar conversa
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contato;
