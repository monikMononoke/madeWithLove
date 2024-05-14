import {
  divProductosDestacados,
  cerrarVentanaProducto,
  headerProductosDestacados,
  headerTodosProductos,
} from "./constantes.js";
import { productosMain } from "./todosLosProductos.js";

export const ocultarProducto = (divProducto) => {
  const elementoPadre = divProducto.parentElement;
  const claseDelElementoPadre = elementoPadre.getAttribute("class");

  if (claseDelElementoPadre === "productos__destacados-container") {
    ocultarHeader(headerProductosDestacados);
    cerrarVentanaProducto.style.display = "block";
    cerrarVentanaProducto.addEventListener("click", () => {
      divProductosDestacados.style.display = "flex";
      divProducto.style.display = "none";
      cerrarVentanaProducto.style.display = "none";
      mostrarHeader(headerProductosDestacados);
    });
  } else if (claseDelElementoPadre === "pagina-productos") {
    ocultarHeader(headerTodosProductos);
    const volver = document.querySelector(".volver-productos");
    volver.style.display = "block";
    volver.addEventListener("click", () => {
      productosMain.style.display = "flex";
      divProducto.style.display = "none";
      volver.style.display = "none";
      mostrarHeader(headerTodosProductos);
    });
  }
};

const ocultarHeader = (header) => {
  let titulo = header.children[0];
  titulo.style.display = "none";
};
const mostrarHeader = (header) => {
  let titulo = header.children[0];
  titulo.style.display = "block";
};
