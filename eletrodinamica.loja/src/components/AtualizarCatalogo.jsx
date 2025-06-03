import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AtualizarCatalogo = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Enviar para backend via API futuramente
    console.log("Arquivo enviado:", file);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Atualizar Catálogo de Produtos</h2>
      <Form onSubmit={handleUpload}>
        <Form.Group className="mb-3">
          <Form.Label>Selecionar novo PDF</Form.Label>
          <Form.Control
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default AtualizarCatalogo;
