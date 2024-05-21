import { productos } from "./productos.js";
import { divContenedor, divProductosDestacados } from "./constantes.js";
import { ocultarProducto } from "./ocultarProducto.js";
import { detectarAnchoVentana, ventanaOnResize } from "./anchoDeVentana.js";
import { botonAniadir } from "./productoCesta.js";

export const handlerMostrarProducto = () => {
  const divImagen = document.querySelectorAll(".productos__destacados-img");
  divImagen.forEach((producto) => {
    producto.addEventListener("click", () => {
      window.scrollTo(250, 700);
      mostrarProducto(producto, divProductosDestacados, divContenedor);
      seccionesDesplegables();
      botonAniadir();
    });
  });
};

export const mostrarProducto = (producto, contenedor, contenedorPrincipal) => {
  const divContenedorProducto = document.createElement("div");
  const idImagen = producto.getAttribute("data-id");
  const index = parseInt(idImagen);

  detectarAnchoVentana(
    divContenedorProducto,
    "producto-active-small",
    "producto-active",
    1200
  );
  ventanaOnResize(
    divContenedorProducto,
    "producto-active-small",
    "producto-active",
    1200
  );
  divContenedorProducto.innerHTML = `
    <img class="producto-active-img" src="${productos[index].imagen}"/>
    
    <div class="producto-active-texto"> 

    <h2 class="producto-active-h2">${productos[index].producto}</h2>

    <div class="producto-active-descripcion">
    <p class="producto-active-p">${productos[index].descripcion}</p> 
    <p class="producto-active-precio">Precio: ${productos[index].precio}€</p>
   
    <div class="desplegable">
      <button class="acordeon">Edad recomendada: </button>
        <div class="panel">
          <p> ${productos[index].edad}</p>
        </div>

        <button class="acordeon">Dimensiones: </button>
        <div class="panel">
          <p>${productos[index].dimensiones}</p>
        </div>

        <button class="acordeon">Beneficios: </button>
        <div class="panel">
          <p>${productos[index].beneficios}</p>
        </div>
    </div>
 
    <div>
    <button class="producto-active-aniadir" data-id="${index}">Añadir producto a la cesta</button>
    </div>
    </div>
    `;

  contenedorPrincipal.appendChild(divContenedorProducto);
  contenedor.style.display = "none";
  ocultarProducto(divContenedorProducto);
};

export const seccionesDesplegables = () => {
  const desplegables = document.querySelectorAll(".acordeon");

  desplegables.forEach((desplegable) => {
    desplegable.addEventListener("click", () => {
      desplegable.classList.toggle("active");

      let panel = desplegable.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
};
