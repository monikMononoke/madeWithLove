import { productos } from "./productos.js";
import { divContenedor, divProductosDestacados } from "./constantes.js";
import { ocultarProducto } from "./ocultarProducto.js";
import { detectarAnchoVentana, ventanaOnResize } from "./anchoDeVentana.js";
import { botonAniadir } from "./gestionCarrito.js";

export const handlerMostrarProducto = () => {
  const divImagen = document.querySelectorAll(".productos__destacados-img");
  divImagen.forEach((producto) => {
    producto.addEventListener("click", () => {
      window.scrollTo(0, 760);
      mostrarProducto(producto, divProductosDestacados, divContenedor);
      botonAniadir();
    });
  });
};

export const mostrarProducto = (producto, contenedor, contenedorPrincipal) => {
  const divContenedorProducto = document.createElement("div");
  const idImagen = producto.getAttribute("data-id");
  const index = parseInt(idImagen);

  detectarAnchoVentana(divContenedorProducto);
  ventanaOnResize(divContenedorProducto);
  divContenedorProducto.innerHTML = `
    <img class="producto-active-img" src="${productos[index].imagen}"/>
    
    <div class="producto-active-texto"> 
    <h2 class="producto-active-h2">${productos[index].producto}</h2>
    <p class="producto-active-precio">Precio: <strong>${productos[index].precio}€</strong></p>
    <p class="producto-active-p">${productos[index].descripcion}</p> 
    <button class="producto-active-aniadir" data-id="${index}">Añadir producto a la cesta</button>
    </div>
    `;

  contenedorPrincipal.appendChild(divContenedorProducto);
  contenedor.style.display = "none";

  ocultarProducto(divContenedorProducto);
};
