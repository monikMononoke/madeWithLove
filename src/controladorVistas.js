import {
  paginaTodosProductos,
  loginForm,
  main,
  paginaSubcategorias,
  paginaBlog,
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
          break;

        case "#login":
          mostrarVistaLogin();
          break;

        case "#subcategorias":
          mostrarVistaSubcategorias();
          break;
        case "#blog":
          mostrarVistaBlog();
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
    paginaSubcategorias.style.display = "none";
    paginaTodosProductos.style.display = "none";
    loginForm.style.display = "none";
    main.style.display = "none";
    paginaBlog.style.display = "none";
  }
};

const mostrarVistaLogin = () => {
  loginForm.style.display = "flex";
  if (loginForm.style.display === "flex") {
    paginaSubcategorias.style.display = "none";
    divCarrito.style.display = "none";
    paginaTodosProductos.style.display = "none";
    main.style.display = "none";
    paginaBlog.style.display = "none";
  }
};

const mostrarVistaPaginaProductos = () => {
  paginaTodosProductos.style.display = "flex";
  if (paginaTodosProductos.style.display === "flex") {
    paginaSubcategorias.style.display = "none";
    divCarrito.style.display = "none";
    loginForm.style.display = "none";
    main.style.display = "none";
    paginaBlog.style.display = "none";
  }
};

const mostrarVistaSubcategorias = () => {
  paginaSubcategorias.style.display = "flex";
  if (paginaSubcategorias.style.display === "flex") {
    divCarrito.style.display = "none";
    loginForm.style.display = "none";
    main.style.display = "none";
    paginaTodosProductos.style.display = "none";
    paginaBlog.style.display = "none";
  }
};

const mostrarVistaBlog = () => {
  paginaBlog.style.display = "flex";
  if (paginaBlog.style.display === "flex") {
    paginaSubcategorias.style.display = "none";
    divCarrito.style.display = "none";
    loginForm.style.display = "none";
    main.style.display = "none";
    paginaTodosProductos.style.display = "none";
  }
};
