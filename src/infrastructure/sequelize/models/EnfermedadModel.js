const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const EnfermedadModel = sequelize.define("Enfermedad", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  gravedad: { type: DataTypes.STRING, defaultValue: "Leve" }
}, {
  tableName: "enfermedades",
  timestamps: false
});

module.exports = EnfermedadModel;
