import { handlerMostrarProducto } from "./mostrarProducto.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { cargarCarrito } from "./productoCesta.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";
import { mostrarVistaElegida } from "./controladorVistas.js";
import { handlerCarruselMovil } from "./carruselHeroMobile.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerCarruselMovil();
  handlerDesplegarMenu();
  mostrarVistaElegida();
});

handlerMostrarProducto();
cargarCarrito();
mostrarFormulario();
handlerMostrarTodosLosProductos();
