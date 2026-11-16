let alumnos = [
    "Alumno 1",
    "Alumno 2",
    "Alumno 3",
    "Alumno 4",
    "Alumno 5",
    "Alumno 6",
    "Alumno 7",
    "Alumno 8",
    "Alumno 9",
    "Alumno 10"
];
let asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
let lista = document.getElementById("listaAlumnos");
let mensaje = document.getElementById("mensajeAsistencia");
function guardarAsistencia() {
    localStorage.setItem("asistencias", JSON.stringify(asistencias));
    mensaje.textContent = "Asistencia guardada correctamente.";
}
function mostrarAlumnos() {
    lista.innerHTML = "";
    alumnos.forEach(function(alumno) {
        if (!asistencias[alumno]) {
            asistencias[alumno] = "Sin marcar";
        }
        let fila = document.createElement("div");
        fila.className = "fila-alumno";
        let nombre = document.createElement("p");
        nombre.textContent = alumno;
        let opciones = document.createElement("div");
        opciones.className = "opciones-asistencia";
        let presente = document.createElement("input");
        presente.type = "checkbox";
        presente.className = "checkbox-asistencia";
        presente.checked = asistencias[alumno] === "Presente";
        let textoPresente = document.createElement("label");
        textoPresente.textContent = "Presente";
        let ausente = document.createElement("input");
        ausente.type = "checkbox";
        ausente.className = "checkbox-asistencia";
        ausente.checked = asistencias[alumno] === "Ausente";
        let textoAusente = document.createElement("label");
        textoAusente.textContent = "Ausente";
        let estado = document.createElement("p");
        estado.className = "estado-alumno";
        estado.textContent = "Estado: " + asistencias[alumno];
        presente.onchange = function() {
            if (presente.checked) {
                ausente.checked = false;
                asistencias[alumno] = "Presente";
            } else {
                asistencias[alumno] = "Sin marcar";
            }
            estado.textContent = "Estado: " + asistencias[alumno];
            guardarAsistencia();
        };
        ausente.onchange = function() {
            if (ausente.checked) {
                presente.checked = false;
                asistencias[alumno] = "Ausente";
            } else {
                asistencias[alumno] = "Sin marcar";
            }
            estado.textContent = "Estado: " + asistencias[alumno];
            guardarAsistencia();
        };
        let opcionPresente = document.createElement("div");
        opcionPresente.appendChild(presente);
        opcionPresente.appendChild(textoPresente);
        let opcionAusente = document.createElement("div");
        opcionAusente.appendChild(ausente);
        opcionAusente.appendChild(textoAusente);
        opciones.appendChild(opcionPresente);
        opciones.appendChild(opcionAusente);
        fila.appendChild(nombre);
        fila.appendChild(opciones);
        fila.appendChild(estado);
        lista.appendChild(fila);
    });
}
mostrarAlumnos();
