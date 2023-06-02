const Sequelize = require("sequelize");
const db = require("../db");
const Users = require("./Users");

class Publicaciones extends Sequelize.Model {}

Publicaciones.init(
  {
    imagen: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    }
  },
  { sequelize: db, modelName: "publicaciones" }
);

Publicaciones.belongsTo(Users, { through: "publicacion_creador" });

module.exports = Publicaciones;
