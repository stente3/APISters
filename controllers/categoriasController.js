import data from "../data/data.js";
import Categoria from "../models/Categoria.js";

// functión para crear una categoría
export const crearCategoria = (req, res) => {
  const { categoria, estado, fecha_creacion } = req.body;
  const id = data.categorias.length + 1;
  const nuevaCategoria = new Categoria(id, categoria, estado, fecha_creacion);
  data.categorias.push(nuevaCategoria);
  res.status(201).json(nuevaCategoria);
};

// función para obtener todas las categorías
export const obtenerCategorias = (req, res) => {
  res.json(data.categorias);
};

// función para obtener una categoría
export const obtenerCategoria = (req, res) => {
  const categoria = data.categorias.find((c) => c.id == req.params.id);
  if (!categoria)
    return res.status(404).json({ message: "Categoría no encontrada" });
  res.json(categoria);
};

// función para actualizar una categoría
export const actualizarCategoria = (req, res) => {
  const categoria = data.categorias.find((c) => c.id == req.params.id);
  if (!categoria)
    return res.status(404).json({ message: "Categoría no encontrada" });
  Object.assign(categoria, req.body);
  res.json(categoria);
};

// función para eliminar una categoría
export const eliminarCategoria = (req, res) => {
  const index = data.categorias.findIndex((c) => c.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Categoría no encontrada" });
  data.categorias.splice(index, 1);
  res.status(204).send();
};
