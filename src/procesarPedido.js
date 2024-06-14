import { carrito } from "./productoCesta.js";
import { main } from "./constantes.js";

const divCarrito = document.querySelector(".carrito-main");

const enlaceVolver = document.querySelector(".cerrar-carrito");

const botonProcesar = document.querySelector(".procesar-pedido");

const productosCarrito = document.querySelector(".carrito");
const carritoContenedor = document.querySelector(".carrito-contenedor");

export const procesarPedido = () => {
  botonProcesar.addEventListener("click", () => {
    const divFormulario = document.querySelector(".div-formulario-pedido");
    if (carrito.length !== 0 && !divFormulario) {
      divFormularioPedido();
      productosCarrito.style.display = "none";
      botonProcesar.textContent = "REALIZAR PEDIDO";
    }
    botonProcesar.removeEventListener("click", divFormularioPedido);
  });
};

const divFormularioPedido = () => {
  const divFormulario = document.createElement("div");
  divFormulario.classList.add("div-formulario-pedido");

  divFormulario.innerHTML = `
<form  class="formulario-pedido">
<div>
<label for="nombre">Nombre: </label><br>
<input type="text" id="nombre"  required>
</div>

<div>
<label for="apellidos">Apellidos: </label><br>
<input type="text" id="apellidos"  required>
</div>

<div>
<label for="email">Email:</label><br>
<input type="email" id="email" required>
</div>

<div>
<label for="direccion">Dirección: </label><br>
<input type="text" id="direccion" required">
</div>

<div>
<label for="provincia">Provincia:</label><br>
<input type="text" id="provincia" required>
</div>

<div>
<label for="codPostal">Código postal</label><br>
<input type="number" id="codPostal" max="99999" required>
</div>

<div>
<input type="submit" value="Enviar" id="enviar"> <br>
<input type="reset" value="Resetear">
</div>
<form>
`;

  carritoContenedor.appendChild(divFormulario);
  volverALaCesta();
  pasarelaDePago();
};

const pasarelaDePago = () => {
  const formularioPedido = document.querySelector(".formulario-pedido");
  formularioPedido.addEventListener("submit", (e) => {
    e.preventDefault();
    pintarPasarelaDePago();
  });
};

const pintarPasarelaDePago = () => {
  const divFormulario = document.querySelector(".div-formulario-pedido");
  divFormulario.classList.toggle("formulario-envio");
  divFormulario.innerHTML = `
  <div class="metodo-envio">
  <form>
  <h2>Dónde enviamos tu pedido?</h2>
  <div class="label-input">
  <label for="casa">A casa: </label>
  <input type="radio" id="casa" name="envio" checked>
  </div>
  <br/>
  <div class="label-input">
  <label for="puntoRecogida">Punto de recogida</label>
  <input type="radio" id="puntoRecogida" name="envio">
  </div>
  </form>
  </div>

  <div class="metodo-pago">
  <form>
  <h2>Elige un método de pago</h2>
  <div class="label-input">
  <label for="payPal">PayPal</label>
  <input type="radio" id="payPal" name="pago">
  </div>
  <br/>
  <div class="label-input">
  <label for="tarjeta">Tarjeta</label>
  <input type="radio" id="tarjeta" name="pago" checked>
  </div>
  </form>
  </div>
  `;
  handlerRealizarPedido();
};

const handlerRealizarPedido = () => {
  botonProcesar.addEventListener("click", realizarPedido);
};

const realizarPedido = () => {
  const paginaCarrito = document.querySelector(".carrito-main");
  const divFormulario = document.querySelector(".div-formulario-pedido");
  divFormulario.innerHTML =
    "<h2 class='pedido-realizado'>PEDIDO REALIZADO CON ÉXITO</h2>";
  setTimeout(() => {
    carritoContenedor.removeChild(divFormulario);
    paginaCarrito.style.display = "none";
    main.style.display = "block";
    carrito.length = 0;
    localStorage.clear();
    productosCarrito.style.display = "flex";
  }, 2000);
};

const volverALaCesta = () => {
  const divForm = document.querySelector(".div-formulario-pedido");
  const volverCesta = document.createElement("p");
  volverCesta.innerHTML = `<a class="volver-cesta"> / Volver a la cesta </a>`;
  enlaceVolver.insertAdjacentElement("afterend", volverCesta);

  volverCesta.addEventListener("click", () => {
    if (divForm) {
      carritoContenedor.removeChild(divForm);
      productosCarrito.style.display = "flex";
      volverCesta.remove();
      botonProcesar.removeEventListener("click", realizarPedido);
      botonProcesar.innerHTML = "PROCESAR COMPRA";
      botonProcesar.addEventListener("click", divFormularioPedido);
    }
  });
};
