const IEnfermedadRepository = require("../../domain/repositories/enfermedadRepository");
const EnfermedadModel = require("./models/EnfermedadModel");

class EnfermedadRepositoryImpl extends IEnfermedadRepository {

  async create(data) {
    return (await EnfermedadModel.create(data)).toJSON();
  }

  async findAll() {
    return await EnfermedadModel.findAll({ raw: true });
  }

  async findById(id) {
    return await EnfermedadModel.findByPk(id, { raw: true });
  }

  async update(id, data) {
    await EnfermedadModel.update(data, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    const found = await this.findById(id);
    if (!found) return null;
    await EnfermedadModel.destroy({ where: { id } });
    return found;
  }

}

module.exports = EnfermedadRepositoryImpl;
