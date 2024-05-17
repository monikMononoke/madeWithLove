import { detectarAnchoVentana, ventanaOnResize } from "./anchoDeVentana.js";

const divHero = document.querySelector(".hero");

export const handlerCarrusel = () => {
  detectarAnchoVentana(divHero, "hero-small", "hero", 402);
  ventanaOnResize(divHero, "hero-small", "hero", 402);

  if (divHero.className === "hero-small") {
  }
};
