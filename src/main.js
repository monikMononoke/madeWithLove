import { handlerMostrarProducto } from "./mostrarProducto.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { loadCarrito } from "./gestionCarrito.js";

document.addEventListener("DOMContentLoaded", () => {
  handlerDesplegarMenu();
  handlerMostrarProducto();
  loadCarrito();
});
