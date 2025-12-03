const express = require("express");

function crearRouter(service) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      res.status(201).json(await service.crear(req.body));
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  router.get("/", async (_, res) => {
    res.json(await service.listar());
  });

  router.get("/:id", async (req, res) => {
    try {
      res.json(await service.obtener(req.params.id));
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  });

  router.put("/:id", async (req, res) => {
    res.json(await service.actualizar(req.params.id, req.body));
  });

  router.delete("/:id", async (req, res) => {
    res.json(await service.eliminar(req.params.id));
  });

  return router;
}

module.exports = crearRouter;
