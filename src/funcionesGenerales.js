export const ocultarSeccion = () => {
  const todosLosEnlaces = document.querySelectorAll("a");

  todosLosEnlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const nuevoEnlace = enlace.getAttribute("href");
      console.log(nuevoEnlace);
    });
  });
};
