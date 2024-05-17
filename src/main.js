import { handlerMostrarProducto } from "./mostrarProducto.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { cargarCarrito } from "./productoCesta.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";
import { mostrarVistaElegida } from "./controladorVistas.js";
import { handlerCarrusel } from "./carruselFotosHero.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerCarrusel();
  handlerDesplegarMenu();
  mostrarVistaElegida();
});

handlerMostrarProducto();
cargarCarrito();
mostrarFormulario();
handlerMostrarTodosLosProductos();
