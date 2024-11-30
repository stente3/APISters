export default class Usuario {
  constructor(id, nombre, apellido, cedula, edad, email, estado) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.edad = edad;
    this.email = email;
    this.estado = estado;
    this.cursos = [];
  }
}
