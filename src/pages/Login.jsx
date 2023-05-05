import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/login.css";

const Login = () => {
  return (
    <>
      <div className="login-contenedor">
        <img
          className="login-img"
          src="https://data.whicdn.com/avatars/13431676/profile.png?t=1528298948"
          alt="Logo"
        />
        <h2 className="login-h2">INICIAR SESIÓN</h2>
        <form className="form-login" method="post">
          <label className="login-label">Correo Electrónico</label>
          <input className="login-input" type="text" />
          <label className="login-label">Contraseña</label>
          <input className="login-input-dos" type="password" />
          <Link to="/registrarme">
            <p className="login-p">Aún no estás registrado? Haz click aquí</p>
          </Link>
        </form>
        <button className="login-btn">INICIAR</button>
      </div>
    </>
  );
};

export default Login;
