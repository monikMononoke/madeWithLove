import { productos } from "./productos.js";
import { mostrarProducto, seccionesDesplegables } from "./mostrarProducto.js";
import { botonAniadir } from "./productoCesta.js";
import { handlerVolverCategorias } from "./ocultarProducto.js";

const seccionCategorias = document.querySelector(".categorias-container");
const divCategorias = document.querySelector(".categorias");
const divProductosCategoria = document.querySelector(".productos-categoria");

const headerCategorias = document.querySelector(".cat-h2");

const imagenCatUno = document.querySelector(".categoria-1");
const imagenCatDos = document.querySelector(".categoria-2");
const imagenCatTres = document.querySelector(".categoria-3");

export const handlerMostrarCategorias = () => {
  mostrarProductosCatUno();
  mostrarProductosCatDos();
  mostrarProductosCatTres();
};

const detallesProductoPorCategoria = () => {
  const divImagen = document.querySelectorAll(".productos__categoria-img");
  divImagen.forEach((producto) => {
    producto.addEventListener("click", () => {
      mostrarProducto(producto, divProductosCategoria, seccionCategorias);
      window.scrollTo(0, 1750);
      seccionesDesplegables();
      botonAniadir();
    });
  });
};

const pintarProductos = (producto) => {
  const divProducto = document.createElement("div");
  divProducto.classList.add("productos__categorias-div");
  divProducto.innerHTML = `
          <img
            src="${producto.imagen}"
            alt="${producto.descripcion}"
            class="productos__categoria-img"
            data-id="${producto.id}"
          />
          <p>${producto.producto}<span>${producto.precio}</span></p>
        `;

  divProductosCategoria.appendChild(divProducto);
  divProductosCategoria.style.display = "flex";

  divCategorias.style.display = "none";
};

const mostrarProductosCatUno = () => {
  imagenCatUno.addEventListener("click", () => {
    mostrarEnlaceVolverCategorias();
    headerCategorias.innerHTML = "CATEGORIA DE 0 A 1 AÑO";
    productos.forEach((producto) => {
      if (producto.categoria === "0-1") {
        pintarProductos(producto);
        handlerVolverCategorias();
      }
    });
    detallesProductoPorCategoria();
  });
};

const mostrarProductosCatDos = () => {
  imagenCatDos.addEventListener("click", () => {
    mostrarEnlaceVolverCategorias();
    headerCategorias.innerHTML = "CATEGORIA DE 1 A 3 AÑOS";
    productos.forEach((producto) => {
      if (producto.categoria === "1-3") {
        pintarProductos(producto);
        handlerVolverCategorias();
      }
    });
    detallesProductoPorCategoria();
  });
};

const mostrarProductosCatTres = () => {
  imagenCatTres.addEventListener("click", () => {
    mostrarEnlaceVolverCategorias();
    headerCategorias.innerHTML = "CATEGORIA DESDE 3 AÑOS";
    productos.forEach((producto) => {
      if (producto.categoria === "3+") {
        pintarProductos(producto);
        handlerVolverCategorias();
      }
    });
    detallesProductoPorCategoria();
  });
};

const mostrarEnlaceVolverCategorias = () => {
  const volverCategorias = document.querySelector(".volver-categorias");
  volverCategorias.style.display = "block";
};
