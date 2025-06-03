import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComp from "./components/FooterComp";
import { Container } from "react-bootstrap";
import NavBarComp from "./components/NavBarComp";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Trabalhe from "./pages/Trabalhe";
import Paineis from "./pages/Paineis";
import Controladores from "./pages//controladores/Controladores";
import Venda from "./pages/Venda";
import Rebobinagem from "./pages/Rebobinagem";
import Estufas from "./pages/Estufas";

import ProdutoDetalhe from "./pages/controladores/ProdutoDetalhe";

const App = () => {
  return (
    <Router>
      <div className="app-content">
        <NavBarComp />
        <Container className="mt-5">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/trabalhe" element={<Trabalhe />} />
            <Route path="/paineis" element={<Paineis />} />
            <Route path="/controladores" element={<Controladores />} />
            <Route path="/venda" element={<Venda />} />
            <Route path="/rebobinagem" element={<Rebobinagem />} />
            <Route path="/estufas" element={<Estufas />} />

            {/* Rota dinâmica de produto */}
            <Route path="/controladores/:slug" element={<ProdutoDetalhe />} />
          </Routes>
        </Container>
      </div>
      <FooterComp />
    </Router>
  );
};

export default App;
