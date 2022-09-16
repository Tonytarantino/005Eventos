let titulo = document.getElementById("tituloPortada");
let subtitulo = document.getElementById("subtituloPortada");
let parrafoInscripciones = document.getElementById("parrafoInscripciones");


/* let portada = document.getElementById("fondoPortada"); */
/* let seleccionCurso = prompt("Ingrese el nombre del curso que le interese: Microbit, Arduino o Videojuegos.") */

/* if (seleccionCurso === "Microbit") {
    titulo.innerHTML = "Microbit";
} else if (seleccionCurso ==="Arduino"){
    titulo.innerHTML = "Arduino";
} else if (seleccionCurso === "Videojuegos") {
    titulo.innerHTML = "Videojuegos";
    subtitulo.innerHTML = "Tus primeros pasos en la programación por bloques"
} */

function inscripcionMicrobit() {
  console.log("inscripcion microbit");
  titulo.innerHTML = "Microbit";
  cards.remove();
  parrafoInscripciones.remove();
}
let tarjetaMicrobit = document.getElementById("cardMicrobit");
tarjetaMicrobit.addEventListener("click", inscripcionMicrobit);

function inscripcionVideojuegos() {
  console.log("inscripcion Videojuegos");
  titulo.innerHTML = "Videojuegos";
  subtitulo.innerHTML =
    "Tus primeros pasos en la ideación y programación por bloques";
    cards.remove();
    
}
let tarjetaVideojuegos = document.getElementById("cardVideojuegos");
tarjetaVideojuegos.addEventListener("click", inscripcionVideojuegos);

function inscripcionArduino() {
  console.log("inscripcion Arduino");
  titulo.innerHTML = "Arduino";
  subtitulo.innerHTML =
    "Tus primeros pasos en la construcción y programacion de circuitos";
    cards.remove();
}
let tarjetaArduino = document.getElementById("cardArduino");
tarjetaArduino.addEventListener("click", inscripcionArduino);

//probar con querySelector para armar cards con caract y herramientas de cada tecnologia (placas, componentes, platafoma, objetivo, carga horaria, diploma)
