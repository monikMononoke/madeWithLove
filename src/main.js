import { handlerMostrarProducto } from "./mostrarProducto.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { cargarCarrito } from "./gestionCarrito.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerDesplegarMenu();
  handlerMostrarProducto();
  cargarCarrito();
  mostrarFormulario();
  handlerMostrarTodosLosProductos();
});
