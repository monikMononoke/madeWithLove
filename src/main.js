import { handlerCarruselMovil } from "./carruselHeroMobile.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { mostrarVistaElegida } from "./controladorVistas.js";
import { cargarCarrito } from "./productoCesta.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarProductoDestacado } from "./mostrarProducto.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";
import { handlerMostrarCategorias } from "./categoriasPorEdad.js";
import { handlerSubcategorias } from "./paginaSubcategorias.js";
import { handlerMostrarPaginaBlog } from "./paginaBlog.js";
import { crearDivEntradas } from "./seccionBlog.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerCarruselMovil();
  handlerDesplegarMenu();
  mostrarVistaElegida();
});

handlerSubcategorias();

cargarCarrito();
mostrarFormulario();

handlerMostrarCategorias();

handlerMostrarProductoDestacado();
handlerMostrarTodosLosProductos();

handlerMostrarPaginaBlog();

crearDivEntradas();
