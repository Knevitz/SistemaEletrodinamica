import React, { useState } from "react";
import { Link } from "react-router-dom";
import CNPJ from "../components/CNPJ";
import "../App.css";
import "./login.css";
import loginImage from "../assets/foto-divulgacao.jpg";

const Login = () => {
  const [cnpj, setCnpj] = useState("");

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-login">
      <div className="row bg-white login-card overflow-hidden w-100">
        <div className="col-md-6 p-0 d-none d-md-block">
          <img
            src={loginImage}
            alt="Imagem Login"
            className="img-fluid h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Coluna direita com formulário */}
        <div className="col-md-6 p-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-center text-danger mb-4">Acesse sua conta</h2>
          <form style={{ width: "100%" }}>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                Login (CNPJ)
              </label>
              <CNPJ
                id="cnpj"
                name="cnpj"
                className="form-control"
                value={cnpj}
                onChange={setCnpj}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Não tem uma conta?{" "}
            <Link to="/" className="text-danger">
              Registre-se
            </Link>
          </p>
        </div>

        {/* Imagem para telas pequenas */}
        <div className="col-12 p-0 d-md-none">
          <img
            src={loginImage}
            alt="Imagem Login"
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
