import express from "express";
import usuariosRoutes from "./routes/usuarios.js";
import cursosRoutes from "./routes/cursos.js";
import categoriasRoutes from "./routes/categorias.js";

// Creamos el servidor
const app = express();
const port = 5555;

// Middleware para parsear el body de las peticiones
app.use(express.json());

/* Usar rutas */
// ruta relacionada con usuarios
app.use("/usuarios", usuariosRoutes);
// ruta relacionada con cursos
app.use("/cursos", cursosRoutes);
// ruta relacionada con categorias
app.use("/categorias", categoriasRoutes);

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
