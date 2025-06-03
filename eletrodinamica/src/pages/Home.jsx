import React from "react";
import CardComp from "../components/CardComp";
import { Container } from "react-bootstrap";
import relesImage from "../assets/reles-industriais.jpg";
import quadroImage from "../assets/quadro-comando.jpg";
import estufasImage from "../assets/estufas-industriais.jpg";
import EquipImage from "../assets/foto-divulgacao.jpg";
import rebobinagemImage from "../assets/rebobinagem.jpg";
import primeiro from "../assets/primeiro prédio.jpg";
import segundo from "../assets/segundo prédio.jpg";
import terceiro from "../assets/terceiro prédio.jpg";
import BotaoComp from "../components/BotaoComp";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>
          A Eletrodinâmica&reg; Indústria e Comércio oferece soluções em
          automação para a indústria, atendendo nos seguintes segmentos:
        </h1>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-3 m-3 justify-content-center">
          <div className="col">
            <CardComp
              imgSrc={quadroImage}
              title="Montagem de quadros de comando"
              link="/paineis"
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={relesImage}
              title="Fabricação de relés industriais"
              link="/controladores"
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={EquipImage}
              title="Venda de equipamentos elétricos industriais"
              link="/venda"
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={rebobinagemImage}
              title="Rebobinagem e consertos de motores trifásicos"
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={estufasImage}
              title="Fabricação de estufas industriais"
              link="/estufas"
              hasColorEffect={false}
            />
          </div>
        </div>
        <h1>Como Chegar</h1>
        <p>Veja o mapa abaixo para saber como chegar ao nosso endereço:</p>
        <div className="d-flex justify-content-center align-items-center m-4">
          <div
            className="ratio ratio-16x9"
            style={{ maxWidth: "100%", width: "100%", maxHeight: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.1120150501683!2d-50.776723!3d-29.513094000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519243e483b34b5%3A0x487d2a2d7a6861cd!2sEletrodin%C3%A2mica%20Automa%C3%A7%C3%A3o%20Industrial!5e0!3m2!1sen!2sbr!4v1744763208276!5m2!1sen!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eletrodinamica - Rua da Indústria, 212, Centro, Três Coroas - RS, CEP: 95660-000"
            ></iframe>
          </div>
        </div>
        <h2>Nossos Antigos Endereços</h2>
        <p>
          A trajetória da Eletrodinâmica&reg; é marcada pela evolução e
          crescimento contínuo. Ao longo dos anos, a empresa passou por
          diferentes locais que representaram marcos importantes em sua
          história. A seguir, você verá os prédios onde estivemos e o impacto
          que tiveram em nosso desenvolvimento.
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-3 justify-content-center">
          <div className="col">
            <CardComp
              imgSrc={primeiro}
              title="Prédio 1: Início das atividades"
              description="Este foi o nosso primeiro endereço, onde a Eletrodinâmica iniciou suas operações e deu os primeiros passos no mercado de automação industrial."
              hasColorEffect={true}
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={segundo}
              title="Prédio 2: Expansão e crescimento"
              description="Após a expansão da equipe, nos mudamos para um espaço maior, onde consolidamos a nossa presença no mercado regional."
              hasColorEffect={true}
            />
          </div>
          <div className="col">
            <CardComp
              imgSrc={terceiro}
              title="Prédio 3: Sede atual"
              description="Nossa sede atual, que simboliza nossa estabilidade e compromisso com a inovação no setor de automação industrial."
              hasColorEffect={false}
            />
          </div>
        </div>
        <p>
          <strong>
            Fundada em 12 de maio de 2006, com sede na cidade de Três Coroas,
            encosta da serra gaúcha.
          </strong>
        </p>
        <h2>
          <strong>MISSÃO</strong>
        </h2>
        <p>
          Desenvolver, produzir e comercializar soluções de controle em
          automação industrial, satisfazendo a necessidade de nossos clientes,
          bem como o aperfeiçoamento contínuo de nossa linha de produtos,
          fornecendo soluções de alta confiabilidade.
        </p>
        <h2>
          <strong>VISÃO</strong>
        </h2>
        <p>
          Ser referência como fornecedor de painéis de comando elétricos em
          âmbito regional, reconhecida pela excelência na qualidade dos produtos
          e serviços oferecidos, pela ética profissional e pelo relacionamento
          transparente com o cliente.
        </p>
        <h2>
          <strong>VALORES</strong>
        </h2>
        <ul>
          <li>Ética profissional</li>
          <li>Excelência no atendimento ao cliente</li>
          <li>Tecnologia</li>
          <li>Melhoria contínua</li>
        </ul>
        <p>
          A empresa iniciou suas atividades com o exercício da profissão de
          eletrotécnico por parte do Sr. Tadeu Pedroso, em meados dos anos 90,
          prestando serviços de manutenção elétrica em injetoras e extrusoras de
          termoplásticos, posteriormente ampliando seu quadro funcional e,
          consequentemente, seu leque de atividades.
        </p>
        <h2>Atividades e Infraestrutura</h2>
        <p>
          Atualmente a empresa presta serviços de montagens e reformas de
          painéis de comando, fabricação e comércio de equipamentos elétricos
          industriais, tendo como principais clientes as indústrias calçadistas,
          de injetados e extrusão de termoplásticos da região do Vale do
          Paranhana, bem como empresas de perfuração de poços artesianos, na
          prestação de montagens de comandos para motobombas.
        </p>
        <p>
          Contando com profissionais altamente capacitados na sua área de
          atuação, a empresa se mantém há 15 anos no mercado, prezando sempre
          pela ética profissional, a excelência no atendimento ao cliente e a
          melhoria contínua no âmbito organizacional e tecnológico.
        </p>
        <p>
          <strong>
            Entre em contato e peça seu orçamento sem compromisso. Nossa equipe
            terá prazer em atendê-lo.
          </strong>
        </p>
        <div className="mt-4 mb-4">
          <BotaoComp to="/contato">
            <strong>Entrar em contato</strong>
          </BotaoComp>
        </div>
      </Container>
    </div>
  );
};

export default Home;
