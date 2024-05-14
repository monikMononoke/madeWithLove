import { main, loginForm } from "./constantes.js";

export const mostrarFormulario = () => {
  const iconoUsuario = document.querySelector("#icono-usuario");
  iconoUsuario.addEventListener("click", () => {
    main.style.display = "none";
    pintarFormulario();
  });
};

const pintarFormulario = () => {
  if (!loginForm.hasChildNodes()) {
    loginForm.style.display = "flex";
    loginForm.style.height = "calc(100vh - var(--nav-height))";

    const divFormulario = document.createElement("div");
    divFormulario.classList.add("div-formulario");

    loginForm.append(divFormulario);

    divFormulario.innerHTML = `
  <div class="tab">
   <button type="button" class="tablinks-1">Iniciar sesíon</button>
   <button type="button" class="tablinks-2">Registrar usuario</button>
  </div>

  <!--Inicio de sesión-->
  <div class="tabcontent-1" id="inicio-sesion">
    <form action="" class="formulario inicio" autocomplete="on">
      <p>
        <input type="text" id="nombreInicio" placeholder="Nombre"/>
      </p>
      <p>
        <input type="password" id="passInicio" placeholder="Contraseña"
        autocomplete="current-password"/>
      </p>
      <p>
        <input type="submit" value="Iniciar sesion" />
      </p>
    </form>
    <div class="pass-olvidada">
    <p>¿Has olvidado tu contraseña?</p>
    </div>
    </div>


  <!--Registro-->
  <div class="tabcontent-2" id="registro">
    <form action="" class="formulario registro ">
      <p>
      <input type="text" id="nombreRegistro" placeholder="Nombre"
      autocomplete="new-name"/>
      </p>
      <p>
      <input type="password" id="passRegistro" placeholder="Contraseña"
      autocomplete="new-password"/>
      </p>
      <p>
      <input type="password" id="passRepetida" placeholder="Repite la contraseña"
      autocomplete="new-password"/>
      </p>
      <p>
        <input type="submit" value="Registrate" />
      </p>
    </form>
  </div>
  

  `;
    iniciarSesion();
    recogerDatosDeUsuario();
  }
};

const iniciarSesion = () => {
  const inicio = document.querySelector(".tabcontent-1");
  const registro = document.querySelector(".tabcontent-2");

  const inicioLink = document.querySelector(".tablinks-1");
  const registroLink = document.querySelector(".tablinks-2");

  inicioLink.addEventListener("click", () => {
    inicio.style.display = "block";
    registro.style.display = "none";
  });

  registroLink.addEventListener("click", () => {
    inicio.style.display = "none";
    registro.style.display = "block";
  });
};

const recogerDatosDeUsuario = () => {
  const formulario = document.querySelectorAll(".formulario");
  formulario.forEach((formulario) => {
    formulario.addEventListener("submit", () => {
      if (formulario.classList.contains("registro")) {
        const nombre = document.querySelector("#nombreRegistro").value;
        saludarUsuario(nombre);
      } else {
        const nombre = document.querySelector("#nombreInicio").value;
        saludarUsuario(nombre);
      }
    });
  });
};

const saludarUsuario = (nombre) => {
  loginForm.innerHTML = `
  <h2 class="saludar-usuario">Hola ${nombre}!</h2>
  `;
  setTimeout(() => {
    loginForm.innerHTML = "";
    loginForm.style.display = "none";
    main.style.display = "block";
    window.scrollTo(0, 0);
  }, 2000);
};
