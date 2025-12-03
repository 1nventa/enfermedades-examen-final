class Enfermedad {
  constructor({ id = null, nombre, descripcion, gravedad }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.gravedad = gravedad;
  }
}

module.exports = Enfermedad;