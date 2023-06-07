const express = require("express");
const { Users, Publicaciones } = require("../models");
const router = express.Router();

// Crear publicación:
router.post("/crear_publicacion/:userId", (req, res) => {
  const { userId } = req.params;
  const { imagen, name, descripcion } = req.body;

  Publicaciones.create({
    imagen,
    name,
    descripcion,
    userId,
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al crear la publicación: " + error.message);
    });
});

// Ver las publicaciones por usuario:
router.get("/mis_publicaciones/:userId", (req, res) => {
  const { userId } = req.params;

  Publicaciones.findAll({
    where: { userId },
    include: [{ model: Users }],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .send("Error al obtener las publicaciones: " + error.message);
    });
});

module.exports = router;
