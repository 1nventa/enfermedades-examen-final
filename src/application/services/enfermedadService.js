class EnfermedadService {
  constructor(repository) {
    this.repo = repository;
  }

  async crear(data) {
    if (!data.nombre) throw new Error("El nombre es obligatorio");
    return await this.repo.create(data);
  }

  async listar() {
    return await this.repo.findAll();
  }

  async obtener(id) {
    const e = await this.repo.findById(id);
    if (!e) throw new Error("No encontrada");
    return e;
  }

  async actualizar(id, data) {
    return await this.repo.update(id, data);
  }

  async eliminar(id) {
    return await this.repo.delete(id);
  }
}

module.exports = EnfermedadService;
