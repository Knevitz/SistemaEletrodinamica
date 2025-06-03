import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

const ContaCliente = () => {
  const [cliente] = useState({
    razaoSocial: "Empresa Exemplo LTDA",
    cnpj: "00.000.000/0001-00",
    email: "cliente@email.com",
    historico: [
      {
        id: "001",
        data: "01/05/2025",
        status: "Aguardando Resposta",
        itens: 3,
      },
      { id: "002", data: "10/05/2025", status: "Respondido", itens: 5 },
    ],
  });

  return (
    <Container className="mt-5">
      <h2>Minha Conta</h2>
      <p>
        <strong>Razão Social:</strong> {cliente.razaoSocial}
      </p>
      <p>
        <strong>CNPJ:</strong> {cliente.cnpj}
      </p>
      <p>
        <strong>Email:</strong> {cliente.email}
      </p>

      <h4 className="mt-4">Histórico de Cotações</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Status</th>
            <th>Itens</th>
          </tr>
        </thead>
        <tbody>
          {cliente.historico.map((cotacao) => (
            <tr key={cotacao.id}>
              <td>{cotacao.id}</td>
              <td>{cotacao.data}</td>
              <td>{cotacao.status}</td>
              <td>{cotacao.itens}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContaCliente;
