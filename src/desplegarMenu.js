export const handlerDesplegarMenu = () => {
  const menuIcon = document.querySelector(".menu__icon");
  const nav = document.querySelector(".nav");
  nav.style.overflow = "hidden";
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    menuIcon.style.display = "block";
    if (menuIcon.className === "menu__icon change") {
      desplegarMenu();
      nav.style.height = "330px";
    } else {
      nav.style.height = "7rem";
      setTimeout(() => {
        plegarMenu();
      }, 1000);
    }
  });

  const desplegarMenu = () => {
    const menuDesplegable = document.querySelector(".nav__list");
    menuDesplegable.classList.add("menu__desplegado");
    menuDesplegable.style.display = "flex";
    menuDesplegable.style.flexDirection = "column";
    menuDesplegable.style.justifyContent = "flex-start";
  };
};

const plegarMenu = () => {
  const menuDesplegable = document.querySelector(".nav__list");
  menuDesplegable.classList.add("menu__desplegado");
  menuDesplegable.style.display = "flex";
  menuDesplegable.style.flexDirection = "row";
  menuDesplegable.style.justifyContent = "space-between";
};
