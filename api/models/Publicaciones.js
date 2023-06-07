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
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
  },
  { sequelize: db, modelName: "publicaciones" }
);

module.exports = Publicaciones;
