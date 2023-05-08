import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
//Estilos
import "../estilos/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, password }, { withCredentials: true })
      .then((res) => res.data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        window.alert("El usuario es incorrecto o no esta registrado");
      });
  };

  return (
    <>
      <div className="login-contenedor">
        <img
          className="login-img"
          src="https://data.whicdn.com/avatars/13431676/profile.png?t=1528298948"
          alt="Logo"
        />
        <h2 className="login-h2">INICIAR SESIÓN</h2>
        <form className="form-login" method="post" onSubmit={handleSubmit}>
          <label className="login-label">Correo Electrónico</label>
          <input
            className="login-input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="login-label">Contraseña</label>
          <input
            className="login-input-dos"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Link to="/registrarme">
            <p className="login-p">Aún no estás registrado? Haz click aquí</p>
          </Link>
          <button className="login-btn">INICIAR</button>
        </form>
      </div>
    </>
  );
};

export default Login;
