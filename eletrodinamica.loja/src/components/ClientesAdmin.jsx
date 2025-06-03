import React from "react";
import { Container, Table, Form } from "react-bootstrap";

const ClientesAdmin = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Buscar Clientes</h2>
      <Form className="mb-4">
        <Form.Group>
          <Form.Control type="text" placeholder="Buscar por CNPJ ou e-mail" />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>E-mail</th>
            <th>Status da Cotação</th>
            <th>Cotação Efetivada</th>
          </tr>
        </thead>
        <tbody>
          {/* Simulação de cliente */}
          <tr>
            <td>12.345.678/0001-90</td>
            <td>cliente@email.com</td>
            <td>Enviado</td>
            <td>Não</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ClientesAdmin;
