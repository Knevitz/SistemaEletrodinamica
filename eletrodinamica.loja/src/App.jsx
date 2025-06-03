import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComp from "./components/FooterComp";
import { Container } from "react-bootstrap";
import NavBarComp from "./components/NavBarComp";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/login";
import ContaCliente from "./pages/ContaCliente";
import PainelAdmin from "./pages/PainelAdmin";
import ProdutosAdmin from "./components/ProdutosAdmin";
import ClientesAdmin from "./components/ClientesAdmin";
import AtualizarCatalogo from "./components/AtualizarCatalogo";

const AppContent = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/login"; // Adicionando a rota /perfil

  return (
    <>
      {!isLoginPage && <NavBarComp />}
      <div className="app-content">
        <Container className={!isLoginPage ? "mt-5" : ""}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<login />} />{" "}
            <Route path="/cliente" element={<ContaCliente />} />
            <Route path="/admin" element={<PainelAdmin />} />
            <Route path="/admin/produtos" element={<ProdutosAdmin />} />
            <Route path="/admin/clientes" element={<ClientesAdmin />} />
            <Route path="/admin/catalogo" element={<AtualizarCatalogo />} />
            {/* Exemplo de página de perfil */}
          </Routes>
        </Container>
      </div>
      {!isLoginPage && <FooterComp />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
