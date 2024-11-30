import data from "../data/data.js";
import Usuario from "../models/Usuario.js";

// funcion para crear un usuario
export const crearUsuario = (req, res) => {
  const { nombre, apellido, cedula, edad, email, estado } = req.body;
  const id = data.usuarios.length + 1;
  const nuevoUsuario = new Usuario(
    id,
    nombre,
    apellido,
    cedula,
    edad,
    email,
    estado,
  );
  data.usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
};

// funcion para obtener todos los usuarios
export const obtenerUsuarios = (req, res) => {
  res.json(data.usuarios);
};

// funcion para obtener un usuario
export const obtenerUsuario = (req, res) => {
  const usuario = data.usuarios.find((u) => u.id == req.params.id);
  if (!usuario)
    return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(usuario);
};

// funcion para actualizar un usuario
export const actualizarUsuario = (req, res) => {
  const usuario = data.usuarios.find((u) => u.id == req.params.id);
  if (!usuario)
    return res.status(404).json({ message: "Usuario no encontrado" });
  Object.assign(usuario, req.body);
  res.json(usuario);
};

// funcion para eliminar un usuario
export const eliminarUsuario = (req, res) => {
  const index = data.usuarios.findIndex((u) => u.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Usuario no encontrado" });
  // Eliminamos el usuario con splice, esto funciona porque splice devuelve el elemento eliminado
  data.usuarios.splice(index, 1);
  res.status(204).send();
};
