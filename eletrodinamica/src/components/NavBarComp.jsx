import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/eletrodinamica.png";
import "../App.css";

const NavBarComp = () => {
  const location = useLocation();

  const isProductsActive =
    location.pathname.startsWith("/paineis") ||
    location.pathname.startsWith("/controladores") ||
    location.pathname.startsWith("/venda") ||
    location.pathname.startsWith("/rebobinagem") ||
    location.pathname.startsWith("/estufas");

  return (
    <div>
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
            <Nav className="mx-auto gap-lg-4">
              <Nav.Link as={NavLink} to="/">
                Início
              </Nav.Link>

              <NavDropdown
                title="Produtos e serviços"
                id="navbarDropdown"
                className={isProductsActive ? "active" : ""}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/paineis"
                  className={location.pathname === "/paineis" ? "active" : ""}
                >
                  Montagens e reformas de painéis de comando elétrico
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/controladores"
                  className={
                    location.pathname === "/controladores" ? "active" : ""
                  }
                >
                  Controladores e relés industriais
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/venda"
                  className={location.pathname === "/venda" ? "active" : ""}
                >
                  Venda de equipamentos elétricos industriais
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/rebobinagem"
                  className={
                    location.pathname === "/rebobinagem" ? "active" : ""
                  }
                >
                  Rebobinagem e consertos de motores
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/estufas"
                  className={location.pathname === "/estufas" ? "active" : ""}
                >
                  Fabricação de estufas industriais
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/contato">
                Contato
              </Nav.Link>
              <Nav.Link as={NavLink} to="/trabalhe">
                Trabalhe conosco
              </Nav.Link>
              <Nav.Link
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
                id="loja-link"
              >
                Loja
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Pesquisar"
                className="me-2"
                aria-label="Search"
              />
              <Button className="btn-pesquisar" variant="outline-light">
                Pesquisar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComp;
