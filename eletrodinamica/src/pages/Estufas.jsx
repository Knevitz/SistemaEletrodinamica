// src/pages/Estufas.js
import React from "react";
import { Container } from "react-bootstrap";
import estufa from "../assets/estufas-industriais.jpg";

const Estufas = () => {
  return (
    <div>
      <Container>
        <h1>Fabricação de Estufas Industriais</h1>{" "}
        <p>
          Com evolução constante, embasada em dezenas de projetos bem sucedidos
          para indústrias de injetados termoplásticos e calçadistas, as estufas
          industriais fabricadas pela Eletrodinâmica são robustas, confiáveis e
          de fácil manutenção.
        </p>
        <div className="m-4 text-center">
          <h2>Estufa modelo 18 04</h2>
        </div>
        <div className="m-4 row align-items-center justify-content-center">
          <div className="col d-flex justify-content-center">
            <img
              src={estufa}
              alt="Estufa 18 04"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <ul>
              <li className="mb-2">
                Indicada para desumidificação de material plástico granulado ABS
                ou PU, antes do processo de injeção.
              </li>
              <li className="mb-2">
                Temperatura de trabalho de aproximadamente 80ºC.
              </li>
              <li className="mb-2">
                Opção de recirculação ou exaustão do ar interno.
              </li>
              <li className="mb-2">
                Comando temporizado de desligamento, evitando acumulo de calor
                residual no interior do equipamento.
              </li>
              <li className="mb-2">Motor da ventilação trifásico marca WEG.</li>
              <li className="mb-2">
                Controlador de temperatura digital, com limitação de set-point
                máximo.
              </li>
              <li className="mb-2">Rodas para transporte.</li>
              <li className="mb-2">
                Vedação da porta com perfil de silicone, garantindo maior
                aproveitamento da circulação de ar quente interior.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Estufas;
