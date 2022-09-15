let titulo = document.getElementById("tituloPortada");
let subtitulo = document.getElementById("subtituloPortada");
/* let portada = document.getElementById("fondoPortada"); */
let seleccionCurso = prompt("Ingrese el nombre del curso que le interese: Microbit, Arduino o Videojuegos.")

if (seleccionCurso === "Microbit") {
    titulo.innerHTML = "Microbit";
} else if (seleccionCurso ==="Arduino"){
    titulo.innerHTML = "Arduino";
} else if (seleccionCurso === "Videojuegos") {
    titulo.innerHTML = "Videojuegos";
    subtitulo.innerHTML = "Tus primeros pasos en la programación por bloques"
}

//probar con querySelector para armar cards con caract y herramientas de cada tecnologia (placas, componentes, platafoma, objetivo, carga horaria, diploma)
