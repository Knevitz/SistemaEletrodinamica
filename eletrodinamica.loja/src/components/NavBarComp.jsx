import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "../App.css";
import logo from "../assets/eletrodinamica.png";

const NavBarComp = () => {
  const location = useLocation();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Simulação de fetch de categorias do backend
    // No backend, este endpoint deve retornar as categorias criadas no painel admin
    async function fetchCategorias() {
      // Exemplo com fetch, substitua URL pela real
      // const response = await fetch("http://localhost:3001/api/categorias");
      // const data = await response.json();

      // Mock
      const data = [
        { id: 1, nome: "Relés de estado sólido", slug: "EstadoSolido" },
        {
          id: 2,
          nome: "Controladores e relés industriais",
          slug: "controladores",
        },
        { id: 3, nome: "Temporizador digital", slug: "TemporizadorDigital" },
      ];

      setCategorias(data);
    }

    fetchCategorias();
  }, []);

  if (location.pathname === "/login") return null;

  const isProductsActive = categorias.some((cat) =>
    location.pathname.startsWith(`/${cat.slug}`)
  );

  const cartItemCount = 3;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto align-items-center gap-3">
            <Nav.Link as={NavLink} to="/">
              Início
            </Nav.Link>

            <NavDropdown
              title="Produtos"
              id="navbarDropdown"
              className={isProductsActive ? "active" : ""}
            >
              {categorias.map((categoria) => (
                <NavDropdown.Item
                  key={categoria.id}
                  as={NavLink}
                  to={`/${categoria.slug}`}
                >
                  {categoria.nome}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link
              href="http://localhost:3001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login" className="icon-hover">
              <FaUserCircle size={20} />
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/carrinho"
              className="icon-hover position-relative"
            >
              <FaShoppingCart size={20} />
              <Badge
                bg="dark"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartItemCount}
              </Badge>
            </Nav.Link>
          </Nav>

          <Form
            className="d-flex ms-auto mt-2 mt-lg-0"
            style={{ gap: "0.5rem" }}
          >
            <FormControl
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
            />
            <Button className="btn-pesquisar" variant="outline-light">
              Pesquisar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
