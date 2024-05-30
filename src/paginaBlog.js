import { entradasBlog } from "./entradasBlog.js";
import { paginaBlog } from "./constantes.js";

const enlaceBlog = document.querySelector("#enlace-blog");

export const handlerMostrarPaginaBlog = () => {
  enlaceBlog.addEventListener("click", () => {
    const divEntrada = document.querySelector(".contenedor-entrada");
    if (!divEntrada) {
      pintarEntradasBlog();
    } else {
      paginaBlog.removeChild(divEntrada);
      const contenedorEntradas = document.querySelector(
        ".pagina-blog-entradas"
      );
      contenedorEntradas.style.display = "flex";
    }
  });
  volverATodasLasEntradas();
};

export const pintarEntradasBlog = () => {
  const contenedorEntradas = document.createElement("div");
  contenedorEntradas.classList.add("pagina-blog-entradas");

  entradasBlog.forEach((entrada) => {
    const divEntrada = document.createElement("div");
    divEntrada.classList.add("blog__entradas-entrada");
    divEntrada.innerHTML = `
            <h2>${entrada.titulo}</h2>
          
            <img class="blog__img" src="${entrada.imagen}" alt="${entrada.altImagen}"/>
        
            <p>${entrada.introContenido}
            <span><a href="#blog" class="blog__ver-mas" data-id="${entrada.id}">Ver más</a></span>
            </p>
        `;
    contenedorEntradas.appendChild(divEntrada);
  });
  paginaBlog.appendChild(contenedorEntradas);
  recogerIndexEntrada();
};

const recogerIndexEntrada = () => {
  const enlacesVerMas = document.querySelectorAll(".blog__ver-mas");
  enlacesVerMas.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const indexId = enlace.getAttribute("data-id");
      const index = parseInt(indexId);
      pintarEntrada(index);
    });
  });
};

export const pintarEntrada = (index) => {
  const divEntrada = document.createElement("div");
  divEntrada.classList.add("contenedor-entrada");

  const contenedorEntradas = document.querySelector(".pagina-blog-entradas");

  contenedorEntradas.style.display = "none";

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
  volverATodasLasEntradas();
};

const volverATodasLasEntradas = () => {
  const enlaceVolver = document.querySelector(".volver-entradas");
  if (enlaceVolver && enlaceVolver !== undefined) {
    enlaceVolver.addEventListener("click", () => {
      const divEntrada = document.querySelector(".contenedor-entrada");
      paginaBlog.removeChild(divEntrada);

      const contenedorEntradas = document.querySelector(
        ".pagina-blog-entradas"
      );
      contenedorEntradas.style.display = "flex";
    });
  }
};
