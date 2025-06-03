import React from "react";
import { Container } from "react-bootstrap";
import Inversor from "../assets/Inversores.jpg";
import ContactoraWEG from "../assets/ContactoraWeg.jpg";
import SeccionadoraWEG from "../assets/Chave-sec.-weg.jpg";
import FimdeCurso from "../assets/Fim-de-curso.jpg";
import FimdeCursoKap from "../assets/Fim-de-curso-kap.jpg";
import FonteChaveada from "../assets/Fonte-chaveada.jpg";
const Venda = () => {
  return (
    <div>
      <Container>
        <h1>Venda de equipamentos elétricos industriais</h1>

        <div className="mt-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={Inversor}
              alt="Inversor"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Inversor de frequência WEG</h2>
            <p>
              O inversor de frequência CFW300 é um acionamento de velocidade
              variável de alta performance para motores de indução trifásicos,
              ideal para aplicações em máquinas ou equipamentos que necessitam
              de controle preciso e facilidade de operação. Possui tamanho
              compacto, instalação elétrica similar a contatores, controle
              vetorial WEG (VVW) ou escalar (V/F) selecionável, interfacede
              operação (IHM) incorporada, SoftPLC, software de programação WPS
              gratuito e acessórios tipo plug-in que podem ser incorporados,
              agregando mais funcionalidades, proporcionando uma solução
              flexível com excelente custo benefício.{" "}
            </p>
          </div>
        </div>

        <div className="mt-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={ContactoraWEG}
              alt="Contactora WEG "
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Contactora WEG </h2>
            <p>
              Desenvolvidos para atender com eficiência e qualidade as funções
              essenciais para partida e proteção de motores em aplicações leves,
              os componentes desta linha possuem a performance na medida exata
              com desempenho e preço otimizado com um excelente custo-benefício.{" "}
            </p>
          </div>
        </div>

        <div className="mt-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={SeccionadoraWEG}
              alt="Seccionadora WEG"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Chave seccionadora WEG</h2>
            <p>
              As chaves seccionadoras compactas são a solução ideal para o
              seccionamento de circuitos sob carga. Estão disponíveis nas
              correntes de 12A a 160A com tipo de fixação em base ou topo. Estas
              chaves atendem a norma NR12.{" "}
            </p>
          </div>
        </div>
        <div className="mt-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={FimdeCurso}
              alt="Chave fim de curso"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Chave fim de curso</h2>
            <p>Disponíveis nos modelos de corpo plástico ou metálico </p>
          </div>
        </div>
        <div className="mt-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={FimdeCursoKap}
              alt="fim de curso Kap"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Chave fim de curso microrrutor Kap</h2>
            <ul>
              <li>Circuito inversor com capacidade de 16A</li>
              <li>Mecanismo de ação rápida dos contatos com longa vida</li>
              <li>Efeito autolimpante dos contatos</li>
              <li>Grande variedade de atuadores</li>
              <li>Terminais de parafuso, parafuso frontal e faston</li>
              <li>Dimensões básicas conforme DIN 41635 forma E</li>
              <li>Componentes em conformidade com a Diretiva 2006/95/CE</li>
              <li>Componente aprovado ABNT NBR IEC 61058-1 </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 mb-5 row justify-content-center">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              src={FonteChaveada}
              alt="Fonte Chaveada"
              style={{ height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="col mb-2">
            <h2>Fonte Chaveada</h2>
            <p>
              As Fontes Chaveadas são construídas em caixas metálicas de aço.
              Possuem alta confiabilidade e durabilidade. São totalmente
              protegidas contra curto circuito, sobrecarga e sobretensão. Pode
              ser utilizada na substituição de qualquer fonte linear.{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Venda;
