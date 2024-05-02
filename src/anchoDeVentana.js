export const detectarAnchoVentana = (contenedor) => {
  const anchoVentana = window.innerWidth;
  const anchoLimite = 1200;
  if (anchoVentana < anchoLimite) {
    contenedor.className = "producto-active-small";
  } else {
    contenedor.className = "producto-active";
  }
};

export const ventanaOnResize = (contenedor) => {
  window.addEventListener("resize", () => {
    const anchoVentana = window.innerWidth;
    const anchoLimite = 1200;
    if (anchoVentana < anchoLimite) {
      contenedor.className = "producto-active-small";
    } else {
      contenedor.className = "producto-active";
    }
  });
};
