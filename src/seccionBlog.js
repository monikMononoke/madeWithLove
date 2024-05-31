import { mostrarVistaBlog } from "./controladorVistas.js";
import { entradasBlog } from "./entradasBlog.js";
import { paginaBlog } from "./constantes.js";
import { pintarEntradasBlog } from "./paginaBlog.js";

const seccionBlog = document.querySelector(".blog__container");

const divEntradas = document.createElement("div");
divEntradas.classList.add("blog__entradas");

seccionBlog.appendChild(divEntradas);

export const crearDivEntradas = () => {
  for (let i = 0; i <= 2; i++) {
    const contenedorEntradas = document.createElement("div");
    contenedorEntradas.classList.add("pagina-blog-entradas");

    const divEntrada = document.createElement("div");
    divEntrada.classList.add("blog__entradas-entrada");
    divEntrada.innerHTML = `
              <h2>${entradasBlog[i].titulo}</h2>
            
              <img class="blog__img" src="${entradasBlog[i].imagen}" alt="${entradasBlog[i].altImagen}"/>
          
              <p>${entradasBlog[i].introContenido}
              <span><a href="#blog" class="blog__ver-mas" data-id="${entradasBlog[i].id}">Ver más</a></span>
              </p>
          `;
    divEntradas.appendChild(divEntrada);
    recogerIndexEntrada();
  }
};

const recogerIndexEntrada = () => {
  const enlacesVerMas = document.querySelectorAll(".blog__ver-mas");
  enlacesVerMas.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const indexId = enlace.getAttribute("data-id");
      const index = parseInt(indexId);
      mostrarVistaBlog();
      const divEntrada = document.querySelector(".contenedor-entrada");
      if (!divEntrada) {
        mostrarEntradaEnPaginaBlog(index);
      }
    });
  });
};

const mostrarEntradaEnPaginaBlog = (index) => {
  const divEntrada = document.createElement("div");
  divEntrada.classList.add("contenedor-entrada");

  divEntrada.innerHTML = `
  <div class="imagen-entrada">
  <img class="blog__img-entrada" src="${entradasBlog[index].imagen}" alt="${entradasBlog[index].altImagen}"/>
  </div>

  <div class="titulo-contenido">
  <a href="#blog" class="volver-entradas"> \< Volver atrás</a>
  <h2>${entradasBlog[index].titulo}</h2>
      <p>${entradasBlog[index].contenido}</p>
    </div>
      `;

  paginaBlog.appendChild(divEntrada);

  const enlaceVolver = document.querySelector(".volver-entradas");
  enlaceVolver.addEventListener("click", () => {
    paginaBlog.removeChild(divEntrada);
    pintarEntradasBlog();
  });
};
