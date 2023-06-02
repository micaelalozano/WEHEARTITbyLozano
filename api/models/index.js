const Users = require("./Users");
const Publicaciones = require("./Publicaciones");

Users.belongsToMany(Publicaciones,{through: "publicacion_creador"})
Publicaciones.belongsToMany(Users,{through: "publicacion_creador"})

module.exports = { Users, Publicaciones };
