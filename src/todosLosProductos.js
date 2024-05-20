import { productos } from "./productos.js";
import {
  contenedorTodosProductos,
  main,
  paginaTodosProductos,
} from "./constantes.js";
import { mostrarProducto, seccionesDesplegables } from "./mostrarProducto.js";
import { botonAniadir } from "./productoCesta.js";

export const productosMain = document.createElement("div");
productosMain.classList.add("productos-main");

export const handlerMostrarTodosLosProductos = () => {
  const enlaceProductos = document.querySelector("#enlace-productos");
  enlaceProductos.addEventListener("click", () => {
    window.scrollTo(0, 0);
    mostrarTodosLosProductos();
  });
};

const mostrarTodosLosProductos = () => {
  if (!contenedorTodosProductos.hasChildNodes()) {
    contenedorTodosProductos.appendChild(productosMain);
    pintarProductos(productosMain);
    handlerMostrarCadaProducto(productosMain);
    paginaTodosProductos.style.display = "flex";
    contenedorTodosProductos.style.display = "flex";
    main.style.display = "none";
  }
};

const pintarProductos = (contenedor) => {
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("productos__destacados-div");
    divProducto.innerHTML = `
      <img
        src="${producto.imagen}"
        alt="${producto.descripcion}"
        class="productos__destacados-img"
        data-id="${producto.id}"
      />
      <p>${producto.producto}<span>${producto.precio}</span></p>
    `;
    contenedor.appendChild(divProducto);
  });
};

export const handlerMostrarCadaProducto = (contenedor) => {
  const divImagen = document.querySelectorAll(".productos__destacados-img");
  divImagen.forEach((producto) => {
    producto.addEventListener("click", () => {
      window.scrollTo(0, 0);
      mostrarProducto(producto, contenedor, contenedorTodosProductos);
      botonAniadir();
      seccionesDesplegables();
    });
  });
};
