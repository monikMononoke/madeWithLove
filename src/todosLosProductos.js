import { productos } from "./productos.js";
import { paginaProductos, main } from "./constantes.js";
import { mostrarProducto } from "./mostrarProducto.js";
import { botonAniadir } from "./productoCesta.js";

export const handlerMostrarTodosLosProductos = () => {
  const enlaceProductos = document.querySelector("#enlace-productos");
  enlaceProductos.addEventListener("click", () => {
    mostrarTodosLosProductos();
  });
};

const mostrarTodosLosProductos = () => {
  const productosMain = document.createElement("div");
  productosMain.classList.add("productos-main");

  if (!paginaProductos.hasChildNodes()) {
    paginaProductos.appendChild(productosMain);
    pintarProductos(productosMain);
    handlerMostrarCadaProducto(productosMain);
    paginaProductos.style.display = "flex";
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
      window.scrollTo(0, 760);
      mostrarProducto(producto, contenedor, paginaProductos);
      botonAniadir();
    });
  });
};
