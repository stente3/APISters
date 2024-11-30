import data from "../data/data.js";
import Curso from "../models/Curso.js";

export const crearCurso = (req, res) => {
  const { nombre_curso, horas_duracion, fecha_creacion, estado, categoria } =
    req.body;
  const id = data.cursos.length + 1;
  const nuevoCurso = new Curso(
    id,
    nombre_curso,
    horas_duracion,
    fecha_creacion,
    estado,
    categoria,
  );
  data.cursos.push(nuevoCurso);
  res.status(201).json(nuevoCurso);
};

export const obtenerCursos = (req, res) => {
  res.json(data.cursos);
};

export const obtenerCurso = (req, res) => {
  const curso = data.cursos.find((c) => c.id == req.params.id);
  if (!curso) return res.status(404).json({ message: "Curso no encontrado" });
  res.json(curso);
};

export const actualizarCurso = (req, res) => {
  const curso = data.cursos.find((c) => c.id == req.params.id);
  if (!curso) return res.status(404).json({ message: "Curso no encontrado" });
  Object.assign(curso, req.body);
  res.json(curso);
};

export const eliminarCurso = (req, res) => {
  const index = data.cursos.findIndex((c) => c.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Curso no encontrado" });
  data.cursos.splice(index, 1);
  res.status(204).send();
};
