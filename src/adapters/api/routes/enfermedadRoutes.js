const express = require("express");

function crearRouter(service) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const created = await service.crear(req.body);
      res.status(201).json(created);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const list = await service.listar();
      res.json(list);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const item = await service.obtener(req.params.id);
      res.json(item);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const updated = await service.actualizar(req.params.id, req.body);
      res.json(updated);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const deleted = await service.eliminar(req.params.id);
      res.json({ deleted });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });

  return router;
}

module.exports = crearRouter;
