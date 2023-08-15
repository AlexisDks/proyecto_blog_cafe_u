// Query Selector
// const heading = document.querySelector(".header__texto h2");
// heading.textContent = "Nuevo Heading";
// console.log(heading);

// Query Selector All
// const enlaces = document.querySelectorAll(".navegacion a");
// enlaces[0].textContent = "Nuevo texto para Enlace";
// enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");

// Generar un nuevo enlace
// const nuevoEnlace = document.createElement("A");

// // Agregar el href
// nuevoEnlace.href = "nuevo-enlace.html";

// // Agregar el texto
// nuevoEnlace.textContent = "Tienda Virtual";

// // Agregar la clase
// nuevoEnlace.classList.add("navegacion__enlace");

// // Agregar al Documento
// const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(nuevoEnlace);

// Eventos

// console.log(1);

// window.addEventListener("load", () => {
//   console.log(2);
// });

// window.onload = () => {
//   console.log(3);
// };

// document.addEventListener("DOMContentLoaded", () => {
//   console.log(4);
// });

// console.log(5);

// window.onscroll = (e) => {
//   console.log(e);
// };

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", (evento) => {
//   console.log(evento);
//   evento.preventDefault();

//   // Validar un formulario

//   console.log("enviando formulario");
// });

// Eventos de los Inputs y Textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreInput = document.querySelector("#nombre"),
  emailInput = document.querySelector("#email"),
  mensajeTextArea = document.querySelector("#mensaje"),
  formulario = document.querySelector(".formulario");

const leerTexto = (e) => {
  datos[e.target.id] = e.target.value;
};

const mostrarAlerta = (mensaje, error = null) => {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  setTimeout(() => {
    error.remove();
  }, 5000);
};

// El Evento de Submit
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Validar un formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);

    return;
  }

  // Crear la alerta de Enviar correctamente
  mostrarAlerta("Mensaje Enviado Correctamente");
});

nombreInput.addEventListener("input", leerTexto);
emailInput.addEventListener("input", leerTexto);
mensajeTextArea.addEventListener("input", leerTexto);
