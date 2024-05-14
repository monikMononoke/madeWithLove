import {
  paginaTodosProductos,
  loginForm,
  enlacePaginaProductos,
} from "./constantes.js";
import { carrito } from "./productoCesta.js";

const divCarrito = document.querySelector(".carrito-main");
const enlaces = document.querySelectorAll("a");

export const mostrarVistaElegida = () => {
  enlaces.forEach((enlace) => {
    const url = enlace.getAttribute("href");
    enlace.addEventListener("click", () => {
      switch (url) {
        case "#carrito-main":
          mostrarVistaCarrito();
          break;

        case "#pagina-productos":
          mostrarVistaPaginaProductos();
          enlacePaginaProductos.style.backgroundColor = "#4d5b46";
          break;

        case "#login":
          mostrarVistaLogin();
          break;
      }
    });
  });
};

const mostrarVistaCarrito = () => {
  if (carrito.length > 1) {
    divCarrito.style.display = "flex";
  }
  if (divCarrito.style.display === "flex") {
    paginaTodosProductos.style.display = "none";
    loginForm.style.display = "none";
  }
};

const mostrarVistaLogin = () => {
  loginForm.style.display = "flex";
  if (loginForm.style.display === "flex") {
    divCarrito.style.display = "none";
    paginaTodosProductos.style.display = "none";
  }
};

const mostrarVistaPaginaProductos = () => {
  paginaTodosProductos.style.display = "flex";
  if (paginaTodosProductos.style.display === "flex") {
    divCarrito.style.display = "none";
    loginForm.style.display = "none";
  }
};
