import { paginaProductos, loginForm, main } from "./constantes.js";
import { mostrarFormulario } from "./perfilUsuario.js";
import { cargarCarrito, carrito } from "./productoCesta.js";
import { handlerMostrarTodosLosProductos } from "./todosLosProductos.js";

const divCarrito = document.querySelector(".carrito-main");
const enlaces = document.querySelectorAll("a");

export const mostrarVistaElegida = () => {
  enlaces.forEach((enlace) => {
    const url = enlace.getAttribute("href");
    enlace.addEventListener("click", () => {
      switch (url) {
        case "#carrito-main":
          cargarCarrito();
          mostrarVistaCarrito();
          break;

        case "#pagina-productos":
          handlerMostrarTodosLosProductos();
          mostrarVistaPaginaProductos();
          break;

        case "#login":
          mostrarFormulario();
          mostrarVistaLogin();
          break;

        default:
          mostrarMain();
          break;
      }
    });
  });
};

const mostrarVistaCarrito = () => {
  if (carrito.length > 1) {
    divCarrito.style.display = "flex";
    if (divCarrito.style.display === "flex") {
      paginaProductos.style.display = "none";
      loginForm.style.display = "none";
    }
  }
};

const mostrarVistaLogin = () => {
  loginForm.style.display = "flex";
  if (loginForm.style.display === "flex") {
    divCarrito.style.display = "none";
    paginaProductos.style.display = "none";
  }
};

const mostrarVistaPaginaProductos = () => {
  paginaProductos.style.display = "flex";
  if (paginaProductos.style.display === "flex") {
    divCarrito.style.display = "none";
    loginForm.style.display = "none";
  }
};

const mostrarMain = () => {
  main.style.display = "block";
};
