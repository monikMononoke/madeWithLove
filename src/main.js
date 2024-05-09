import { handlerMostrarProducto } from "./mostrarProducto.js";
import { handlerDesplegarMenu } from "./desplegarMenu.js";
import { cargarCarrito } from "./gestionCarrito.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";

handlerMostrarProducto();
cargarCarrito();
mostrarFormulario();
handlerMostrarTodosLosProductos();

document.addEventListener("DOMContentLoaded", handlerDesplegarMenu);
