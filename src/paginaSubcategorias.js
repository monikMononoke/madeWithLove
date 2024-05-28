import { main, carritoVacio } from "./constantes.js";
import { productos } from "./productos.js";
import { mostrarProducto, seccionesDesplegables } from "./mostrarProducto.js";
import { botonAniadir } from "./productoCesta.js";
import {
  ocultarProducto,
  volverAInicioDesdeSubcategorias,
} from "./ocultarProducto.js";

const textoDiv = document.querySelectorAll(".text");

export const handlerSubcategorias = () => {
  textoDiv.forEach((div) => {
    div.addEventListener("click", () => {
      pintarSubcategoria();
      volverAInicioDesdeSubcategorias();
      const contenido = div.textContent;
      const h2 = document.querySelector(".cat-h2");
      switch (contenido) {
        case "Animales":
          productos.forEach((producto) => {
            if (producto.subcategoria === "animales") {
              h2.innerHTML = "ANIMALES";
              pintarProductos(producto);
            }
          });
          break;
        case "Vehículos":
          productos.forEach((producto) => {
            if (producto.subcategoria === "vehiculos") {
              h2.innerHTML = "VEHÍCULOS";
              pintarProductos(producto);
            }
          });
          break;
        case "Didácticos":
          productos.forEach((producto) => {
            if (producto.subcategoria === "didacticos") {
              h2.innerHTML = "DIDÁCTICOS";
              pintarProductos(producto);
            }
          });
          break;
        case "Puzzles":
          productos.forEach((producto) => {
            if (producto.subcategoria === "puzzles") {
              h2.innerHTML = "PUZZLES";
              pintarProductos(producto);
            }
          });
          break;
        case "Sets":
          productos.forEach((producto) => {
            if (producto.subcategoria === "sets") {
              h2.innerHTML = "SETS";
              pintarProductos(producto);
            }
          });
          break;
        default:
          console.log("No se ha encontrado la categoría");
          break;
      }
      pintarDetallesProducto();
      ocultarProducto();
    });
  });
};

const pintarSubcategoria = () => {
  const divContenedorSubcategorias = document.querySelector(
    ".pagina-subcategorias"
  );
  divContenedorSubcategorias.style.display = "flex";
  const divHeader = document.createElement("div");
  divHeader.classList.add("categorias-h2");
  divHeader.innerHTML = `
  <h2 class="cat-h2"></h2>
  <a href="#subcategorias" class="volver-productos-categoria">
    < Volver a los productos
  </a>
  <a href="" class="volver-categorias">
    < Volver a inicio
  </a>
  `;
  divContenedorSubcategorias.appendChild(divHeader);

  const divSubcategoria = document.createElement("div");
  divSubcategoria.classList.add("productos-categoria");
  divContenedorSubcategorias.appendChild(divSubcategoria);

  main.style.display = "none";
};

const pintarProductos = (producto) => {
  const divSubcategoria = document.querySelector(".productos-categoria");

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

  divSubcategoria.appendChild(divProducto);
  divSubcategoria.style.display = "flex";
};

const pintarDetallesProducto = () => {
  const divSubcategoria = document.querySelector(".productos-categoria");
  const divContenedorSubcategorias = document.querySelector(
    ".pagina-subcategorias"
  );

  const divImagen = document.querySelectorAll(".productos__categoria-img");
  divImagen.forEach((producto) => {
    producto.addEventListener("click", () => {
      mostrarProducto(producto, divSubcategoria, divContenedorSubcategorias);
      window.scrollTo(0, 0);
      seccionesDesplegables();
      botonAniadir();
    });
  });
};
