// src/pages/Trabalhe.js
import React from "react";
import { Container } from "react-bootstrap";
import trabalheImage from "../assets/trabalhe.png";
import FormularioContato from "../components/FormularioTrabalheConosco";

const Trabalhe = () => {
  return (
    <div>
      <Container>
        <h1>Trabalhe conosco</h1>

        <div className="img-fluid mb-1 row row-cols-1 g-3">
          <img src={trabalheImage} alt="trabalhe" />
        </div>
        <p>
          A Eletrodinâmica&reg; Automação Industrial seleciona talentos
          alinhados a cultura e valores da empresa, que venham a somar nossa
          equipe nas áreas:
        </p>
        <FormularioContato />
      </Container>
    </div>
  );
};

export default Trabalhe;
