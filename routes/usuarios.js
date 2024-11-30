import express from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuariosController.js";

// controlador de rutas
const router = express.Router();

/* Rutas del API */
// ruta para crear un usuario
router.post("/", crearUsuario);
// ruta para obtener todos los usuarios
router.get("/", obtenerUsuarios);
// ruta para obtener un usuario
router.get("/:id", obtenerUsuario);
// ruta para actualizar un usuario
router.put("/:id", actualizarUsuario);
// ruta para eliminar un usuario
router.delete("/:id", eliminarUsuario);

export default router;
