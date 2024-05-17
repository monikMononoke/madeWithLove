export const detectarAnchoVentana = (
  contenedor,
  claseSmall,
  claseLarge,
  anchoLimite
) => {
  const anchoVentana = window.innerWidth;
  const anchoLimiteVentana = anchoLimite;
  if (anchoVentana < anchoLimiteVentana) {
    contenedor.className = claseSmall;
  } else {
    contenedor.className = claseLarge;
  }
};

export const ventanaOnResize = (
  contenedor,
  claseSmall,
  claseLarge,
  anchoLimite
) => {
  window.addEventListener("resize", () => {
    const anchoVentana = window.innerWidth;
    const anchoLimiteVentana = anchoLimite;
    if (anchoVentana < anchoLimiteVentana) {
      contenedor.className = claseSmall;
    } else {
      contenedor.className = claseLarge;
    }
  });
};
