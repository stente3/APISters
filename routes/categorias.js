import express from "express";
import {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoria,
  actualizarCategoria,
  eliminarCategoria,
} from "../controllers/categoriasController.js";

// controlador de rutas
const router = express.Router();

// ruta para crear una categoria
router.post("/", crearCategoria);
// ruta para obtener todas las categorias
router.get("/", obtenerCategorias);
// ruta para obtener una categoria
router.get("/:id", obtenerCategoria);
// ruta para actualizar una categoria
router.put("/:id", actualizarCategoria);
// ruta para eliminar una categoria
router.delete("/:id", eliminarCategoria);

export default router;
