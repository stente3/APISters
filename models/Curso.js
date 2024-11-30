export default class Curso {
  constructor(
    id,
    nombre_curso,
    horas_duracion,
    fecha_creacion,
    estado,
    categoria,
  ) {
    this.id = id;
    this.nombre_curso = nombre_curso;
    this.horas_duracion = horas_duracion;
    this.fecha_creacion = fecha_creacion;
    this.estado = estado;
    this.categoria = categoria;
  }
}
