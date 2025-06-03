import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const ListaCotações = () => {
  const [cotações, setCotações] = useState([
    {
      id: 1,
      cnpj: "12.345.678/0001-99",
      email: "cliente1@email.com",
      status: "Pendente",
    },
    {
      id: 2,
      cnpj: "98.765.432/0001-88",
      email: "cliente2@email.com",
      status: "Enviado",
    },
  ]);

  const alternarStatus = (id) => {
    setCotações((prev) =>
      prev.map((cotacao) =>
        cotacao.id === id
          ? {
              ...cotacao,
              status: cotacao.status === "Pendente" ? "Enviado" : "Pendente",
            }
          : cotacao
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Cotações recebidas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {cotações.map(({ id, cnpj, email, status }) => (
            <tr key={id}>
              <td>{cnpj}</td>
              <td>{email}</td>
              <td>{status}</td>
              <td>
                <Button variant="warning" onClick={() => alternarStatus(id)}>
                  Marcar como {status === "Pendente" ? "Enviado" : "Pendente"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaCotações;
