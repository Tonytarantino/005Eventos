let titulo = document.getElementById("tituloPortada");
let subtitulo = document.getElementById("subtituloPortada");
let parrafoInscripciones = document.getElementById("parrafoInscripciones");


/* let formulario = document.getElementById("formularioInscripcion"); */
 

 

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


//microbit

let tarjetaMicrobit = document.getElementById("cardMicrobit");
tarjetaMicrobit.addEventListener("click", ()=> {
    console.log("inscripcion microbit");
  titulo.innerHTML = "Microbit"; 
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
  document.formulario.append(formularioInscripcion);
});

//videojuegos 
let tarjetaVideojuegos = document.getElementById("cardVideojuegos");
tarjetaVideojuegos.addEventListener ("click", ()=>{
    console.log("inscripcion Videojuegos");
  titulo.innerHTML = "Videojuegos";
  subtitulo.innerHTML =
    "Tus primeros pasos en la ideación y programación por bloques";
    cards.remove();
    parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
});

//Arduino
let tarjetaArduino = document.getElementById("cardArduino");
tarjetaArduino.addEventListener("click", ()=>{
    console.log("inscripcion Arduino");
  titulo.innerHTML = "Arduino";
  subtitulo.innerHTML =
    "Tus primeros pasos en la construcción y programacion de circuitos";
    cards.remove();
    parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dorso de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*"
});



/* function inscripcionArduino() {
  console.log("inscripcion Arduino");
  titulo.innerHTML = "Arduino";
  subtitulo.innerHTML =
    "Tus primeros pasos en la construcción y programacion de circuitos";
    cards.remove();
    parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
}
let tarjetaArduino = document.getElementById("cardArduino");
tarjetaArduino.addEventListener("click", inscripcionArduino); */

//probar con querySelector para armar cards con caract y herramientas de cada tecnologia (placas, componentes, platafoma, objetivo, carga horaria, diploma)


//la otra manera seria:

/* 

let tarjetaMicrobit = document.getElementById("cardMicrobit");
tarjetaMicrobit.addEventListener("click", ()=>){
    console.log("inscripcion microbit");
  titulo.innerHTML = "Microbit";
  cards.remove();
  parrafoInscripciones.innerHTML = "Para llevar adelante la inscripción te recomendamos tenér algunos archivos preparados para adjuntarlos cuando sea necesrio. Debes tener: foto frente y dordo de DNI del estudiante* y foto frente y dorso de adulto responsable del menor*";
  document.formulario.append(formularioInscripcion);
});
 */