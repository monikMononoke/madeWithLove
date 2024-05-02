import {
  divProductosDestacados,
  cerrarVentanaProducto,
  headerProductosDestacados,
} from "./constantes.js";

export const ocultarProducto = (divProducto) => {
  if (divProductosDestacados.style.display === "none") {
    ocultarHeader();
    cerrarVentanaProducto.style.display = "block";
    cerrarVentanaProducto.addEventListener("click", () => {
      divProductosDestacados.style.display = "flex";
      divProducto.style.display = "none";
      cerrarVentanaProducto.style.display = "none";
      mostrarHeader();
    });
  }
};

const ocultarHeader = () => {
  let header = headerProductosDestacados.children[0];
  header.style.display = "none";
};
const mostrarHeader = () => {
  let header = headerProductosDestacados.children[0];
  header.style.display = "block";
};
