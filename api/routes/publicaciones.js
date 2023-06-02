const express = require("express");
const { Users, Publicaciones } = require("../models");
const router = express.Router();

// Crear publicación:
router.post("/:userId/publicaciones", (req, res) => {
  const { userId } = req.params;
  const { imagen, name, descripcion } = req.body;

  if (!name) {
    return res.status(400).send("El campo 'name' es obligatorio.");
  }

  const publicacion = Publicaciones.build({
    imagen,
    name,
    descripcion,
  });

  Users.findByPk(userId)
    .then((user) => {
      if (user) {
        return publicacion.save() // Guardar la publicación primero
          .then(() => {
            return publicacion.setUsers(user); // Establecer la asociación entre la publicación y el usuario
          });
      } else {
        throw new Error("Necesitas iniciar sesión para subir una publicación");
      }
    })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al crear la publicación: " + error.message);
    });
});

module.exports = router;

