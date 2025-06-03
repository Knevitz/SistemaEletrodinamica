import React from "react";
import { Container } from "react-bootstrap";
import distribuicaoImage from "../assets/distribuicao.png";
import prensaImage from "../assets/prensa.png";
import EstrelaTriangulo from "../assets/EstrelaTriangulo.jpg";

const Paineis = () => {
  return (
    <div>
      <Container>
        <h1>Montagens e reformas de painéis elétricos</h1>
        <p>
          Os painéis elétricos da Eletrodinâmica são
          <strong> montados conforme a necessidade do cliente</strong>, com alto
          grau de <strong>qualidade e confiabilidade</strong>, garantindo menor
          tempo de parada e consequentemente <strong>maior eficiência</strong>
          para o seu negócio.
        </p>
        <p>
          Todos os esquemas elétricos são fornecidos para o cliente com um
          código ao final do projeto com os dados pertinentes a montagem, como
          por exemplo:
        </p>
        <ul>
          <li>
            Esquema elétrico de potência e comando, com legendas de todos os
            componentes;
          </li>
          <li>Manual de operação;</li>
          <li>
            Listagem de parametrizações de inversores de frequência,
            temporizadores ou controladores digitais;
          </li>
          <li>Diagramas de programas de CLP’s;</li>
        </ul>
        <div className="mt-4 row align-items-center justify-content-center">
          <div className="col d-flex justify-content-center">
            <img
              src={distribuicaoImage}
              alt="distribuicao"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>QGBT – Quadro Geral de distribuição de Baixa Tensão</h2>
            <ul>
              <li className="mb-2">
                Montado conforme projeto elétrico enviado pelo cliente, ou
                desenvolvido conforme a necessidade, após vistoria técnica.
              </li>
              <li className="mb-2">
                Caixa metálica com pintura eletrostática a pó RAL 7032, com
                vedações na porta e manopla para abertura.
              </li>
              <li className="mb-2">
                Opção de barramentos envernizados ou pintados.
              </li>
              <li className="mb-2">
                Opção de proteção dos circuitos energizados com chapa de
                acrílico incolor ou porta interna.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 row align-items-center justify-content-center">
          <div className="col d-flex justify-content-center">
            <img
              src={prensaImage}
              alt="prensa"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Comando para prensas hidráulicas</h2>
            <ul>
              <li className="mb-2">
                Montado conforme projeto elétrico enviado pelo cliente, ou
                desenvolvido de acordo com a necessidade.
              </li>
              <li className="mb-2">
                Inclui a programação de CLP’s e parametrização de inversores de
                frequência.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 mb-5 row align-items-center justify-content-center">
          <div className="col d-flex justify-content-center">
            <img
              src={EstrelaTriangulo}
              alt="EstrelaTriangulo"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Chave de partida Estrela-Triângulo</h2>
            <ul>
              <li className="mb-2">Montado em caixa metálica ou plástica.</li>
              <li className="mb-2">
                Proteção de sobre corrente, falta e inversão de fase e curto
                circuito.
              </li>
              <li className="mb-2">
                Opção de monitoramento da corrente por amperímetro.
              </li>
              <li className="mb-2">
                Opção de temporização para aglutinadores ou máquinas que
                necessitem de temporizador.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Paineis;
