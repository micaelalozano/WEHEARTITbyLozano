import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MiLienzo from "./pages/MiLienzo";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/me")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarme" element={<Register />} />
        <Route path="/mi_lienzo" element={<MiLienzo />} />
      </Routes>
    </>
  );
};

export default App;
