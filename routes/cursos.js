import express from "express";
import {
  crearCurso,
  obtenerCursos,
  obtenerCurso,
  actualizarCurso,
  eliminarCurso,
} from "../controllers/cursosController.js";

const router = express.Router();

router.post("/", crearCurso);
router.get("/", obtenerCursos);
router.get("/:id", obtenerCurso);
router.put("/:id", actualizarCurso);
router.delete("/:id", eliminarCurso);

export default router;
