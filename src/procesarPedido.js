import { carrito } from "./productoCesta.js";
import { main } from "./constantes.js";

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
<label for="nombre">Nombre: </label><br>
<input type="text" id="nombre"  required>
<br/>
<label for="apellidos">Apellidos: </label><br>
<input type="text" id="apellidos"  required>
<br/>
<label for="email">Email:</label><br>
<input type="email" id="email" required>
<br/>
<label for="direccion">Dirección: </label><br>
<input type="text" id="direccion" required">
<br/>
<label for="provincia">Provincia:</label><br>
<input type="text" id="provincia" required>
<br/>
<label for="codPostal">Código postal</label><br>
<input type="number" id="codPostal" max="99999" required>
<br/>

<input type="submit" value="Enviar" id="enviar"> <input type="reset" value="Resetear">
<form>
`;

  carritoContenedor.appendChild(divFormulario);
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
  realizarPago();
};

const realizarPago = () => {
  const paginaCarrito = document.querySelector(".carrito-main");

  botonProcesar.addEventListener("click", () => {
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
  });
};
