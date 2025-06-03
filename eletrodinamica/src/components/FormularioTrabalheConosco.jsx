import React, { useState } from "react";
import { Form } from "react-bootstrap";
import BotaoComp from "./BotaoComp";
import Obrigatorio from "../components/Obrigatorio.jsx";

export default function FormularioTrabalheConosco() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    email: "",
    cidadeEstado: "",
    areaInteresse: "",
    experiencia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    // aqui fazer fetch/post
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex gap-3 mb-3">
        <Form.Group className="flex-fill" controlId="formNome">
          <Form.Label>
            <Obrigatorio>Nome</Obrigatorio>
          </Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="flex-fill" controlId="formSobrenome">
          <Form.Label>
            <Obrigatorio>Sobrenome</Obrigatorio>
          </Form.Label>
          <Form.Control
            type="text"
            name="sobrenome"
            value={form.sobrenome}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formTelefone">
        <Form.Label>
          <Obrigatorio>Telefone</Obrigatorio>
        </Form.Label>
        <Form.Control
          type="tel"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          placeholder="Exemplo: (51) 9 9999 9999"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>
          <Obrigatorio>E-mail</Obrigatorio>
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="exemplo@exemplo.com"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCidadeEstado">
        <Form.Label>
          <Obrigatorio>Cidade e Estado</Obrigatorio>
        </Form.Label>
        <Form.Control
          type="text"
          name="cidadeEstado"
          value={form.cidadeEstado}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAreaInteresse">
        <Form.Label>
          <Obrigatorio>Área de Interesse</Obrigatorio>
        </Form.Label>
        <div className="radio-container ms-2 p-2 rounded">
          {["Técnica", "Comercial", "Administrativa"].map((area, index) => (
            <Form.Check
              key={area}
              type="radio"
              label={area}
              name="areaInteresse"
              value={area}
              checked={form.areaInteresse === area}
              onChange={handleChange}
              required={index === 0} // só o primeiro radio precisa do required
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formExperiencia">
        <Form.Label>
          <Obrigatorio>
            Conte um pouco sobre suas experiências profissionais
          </Obrigatorio>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="experiencia"
          value={form.experiencia}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="mb-4">
        <BotaoComp type="submit">Enviar</BotaoComp>
      </div>
    </Form>
  );
}
