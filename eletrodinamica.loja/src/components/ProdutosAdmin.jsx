import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./ProdutoAdmin.css";
const ProdutosAdmin = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Gerenciar Produtos</h2>
      <Button variant="danger" className="mb-3">
        Adicionar Produto
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Visível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Simulação de produto */}
          <tr>
            <td>Controlador X</td>
            <td>Controlador de temperatura</td>
            <td>Sim</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">
                Editar
              </Button>
              <Button className="btn btn-sm ed-danger me-2">Excluir</Button>
              <Button variant="secondary" size="sm">
                Ocultar
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProdutosAdmin;
