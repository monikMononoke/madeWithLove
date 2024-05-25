import { handlerCarruselMovil } from "./carruselHeroMobile.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { mostrarVistaElegida } from "./controladorVistas.js";
import { cargarCarrito } from "./productoCesta.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarProductoDestacado } from "./mostrarProducto.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";
import { handlerMostrarCategorias } from "./categoriasPorEdad.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerCarruselMovil();
  handlerDesplegarMenu();
  mostrarVistaElegida();
});

cargarCarrito();
mostrarFormulario();

handlerMostrarCategorias();

handlerMostrarProductoDestacado();
handlerMostrarTodosLosProductos();
