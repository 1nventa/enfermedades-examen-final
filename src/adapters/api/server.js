const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("../../infrastructure/sequelize");
const EnfermedadRepositoryImpl = require("../../infrastructure/sequelize/enfermedadRepositoryImpl");
const EnfermedadService = require("../../application/services/enfermedadService");
const crearRouter = require("./routes/enfermedadRoutes");

const app = express();
app.use(bodyParser.json());

async function init() {
  await sequelize.sync();

  const repo = new EnfermedadRepositoryImpl();
  const service = new EnfermedadService(repo);
  const router = crearRouter(service);

  app.use("/api/enfermedades", router);

  app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000/api/enfermedades");
  });
}

init();
