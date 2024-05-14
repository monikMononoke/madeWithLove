import { productos } from "./productos.js";
import { main, carritoVacio } from "./constantes.js";

export let carrito = [];

export const botonAniadir = () => {
  const botonAniadir = document.querySelectorAll(".producto-active-aniadir");

  botonAniadir.forEach((boton) =>
    boton.addEventListener("click", () => {
      const idProducto = parseInt(boton.getAttribute("data-id"));
      agregarProductoAlCarrito(idProducto);

      carritoVacio.textContent = "Producto añadido a la cesta";
      carritoVacio.style.display = "block";
      setTimeout(() => {
        carritoVacio.style.display = "none";
      }, 1500);
    })
  );
};

const agregarProductoAlCarrito = (id) => {
  const productoExistente = carrito.find((item) => item.producto.id === id);
  if (productoExistente) {
    productoExistente.cantidad++;
    productoExistente.precioTotal =
      productoExistente.cantidad * productoExistente.producto.precio;
  } else {
    const producto = productos.find((item) => item.id === id);
    if (producto) {
      carrito.push({
        producto: producto,
        cantidad: 1,
        precioTotal: producto.precio,
      });
    }
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const mostrarCarrito = (carrito) => {
  const listaCarrito = document.querySelector(".carrito");

  listaCarrito.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="tarjeta-producto">
    <img src="${item.producto.imagen}"/>
    <div class="descripcion">
    <p class="titulo"><strong>${item.producto.producto}</strong></p>
    <p class="cantidad">Cantidad: <strong>${item.cantidad}</strong></p>
    <p class = "precio-producto">Precio: <strong>${item.precioTotal}€</strong></p>
    </div>
    </div>
    
    `;
    listaCarrito.appendChild(li);

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.textContent = "Eliminar producto de le cesta";
    li.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", () => {
      eliminarProductoDelCarrito(item.producto.id);
    });
  });
};

const actualizaPrecioTotalCarrito = () => {
  const precioTotalCarrito = carrito.reduce(
    (total, item) => total + item.precioTotal,
    0
  );
  document.querySelector(
    "#precio-total"
  ).textContent = `Precio total: ${precioTotalCarrito.toFixed(2)}€`;
};

export const cargarCarrito = () => {
  recuperarCarrito();
  const iconoCarrito = document.querySelector("#icono-carrito");
  iconoCarrito.addEventListener("click", () => {
    const divCarrito = document.querySelector(".carrito-main");
    if (carrito.length < 1) {
      carritoVacio.textContent = "Tu carrito está vacío";
      carritoVacio.style.display = "block";
      setTimeout(() => {
        carritoVacio.style.display = "none";
      }, 2000);
    } else {
      main.style.display = "none";
      mostrarCarrito(carrito);
      actualizaPrecioTotalCarrito();
      divCarrito.style.display = "flex";
    }
  });
  cerrarCarrito();
};

const cerrarCarrito = () => {
  const divCarrito = document.querySelector(".carrito-main");
  const main = document.querySelector("main");
  const cerrar = document.querySelector(".cerrar-carrito");
  cerrar.addEventListener("click", () => {
    divCarrito.style.display = "none";
    main.style.display = "block";
  });
};

const eliminarProductoDelCarrito = (id) => {
  carrito = carrito.filter((item) => item.producto.id !== id);
  actualizaPrecioTotalCarrito();
  mostrarCarrito(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const recuperarCarrito = () => {
  if (localStorage.length !== 0) {
    const carritoGuardado = localStorage.getItem("carrito");
    const carritoRecuperado = JSON.parse(carritoGuardado);

    carritoRecuperado.forEach((item) => {
      carrito.push(item);
    });
  }
};
