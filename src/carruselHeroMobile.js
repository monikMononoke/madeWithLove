import { detectarAnchoVentana, ventanaOnResize } from "./anchoDeVentana.js";

export const handlerCarrusel = () => {
  const divPrincipalHero = document.querySelector(".hero");
  const contenedorSlides = document.querySelector(".hero__div");

  const slides = document.querySelectorAll(".hero__image");

  ventanaOnResize(divPrincipalHero, "hero-small", "hero", 402);
  detectarAnchoVentana(divPrincipalHero, "hero-small", "hero", 402);

  if (divPrincipalHero.className === "hero-small") {
    const controller = document.createElement("div");

    controller.classList.add("nav-container");

    divPrincipalHero.appendChild(controller);
    const flechaNext = document.createElement("div");
    flechaNext.classList.add("flecha-next");
    flechaNext.innerHTML = `<div>></div>`;
    const flechaPrev = document.createElement("div");
    flechaPrev.classList.add("flecha-prev");
    flechaPrev.innerHTML = `<div><</div>`;

    controller.appendChild(flechaPrev);
    controller.appendChild(flechaNext);

    flechaNext.addEventListener("click", () => {
      contenedorSlides.scrollBy({
        left: contenedorSlides.clientWidth,
        behavior: "smooth",
      });
      flechaPrev.style.background = "white";
      flechaNext.style.background = "#b0bca9";
      setTimeout(() => {
        flechaNext.style.background = "white";
      }, 500);
    });

    flechaPrev.addEventListener("click", () => {
      contenedorSlides.scrollBy({
        left: -contenedorSlides.clientWidth,
        behavior: "smooth",
      });

      flechaNext.style.background = "white";
      flechaPrev.style.background = "#b0bca9";
      setTimeout(() => {
        flechaPrev.style.background = "white";
      }, 500);
    });
  }
};
