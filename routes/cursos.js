import express from "express";
import {
  crearCurso,
  obtenerCursos,
  obtenerCurso,
  actualizarCurso,
  eliminarCurso,
} from "../controllers/cursosController.js";

// controlador de rutas
const router = express.Router();

// ruta para crear un curso
router.post("/", crearCurso);
// ruta para obtener todos los cursos
router.get("/", obtenerCursos);
// ruta para obtener un curso
router.get("/:id", obtenerCurso);
// ruta para actualizar un curso
router.put("/:id", actualizarCurso);
// ruta para eliminar un curso
router.delete("/:id", eliminarCurso);

export default router;
