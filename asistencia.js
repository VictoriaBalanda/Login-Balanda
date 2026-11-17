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
function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";
}
function guardarAsistencia() {
    localStorage.setItem("asistencias", JSON.stringify(asistencias));
    mensaje.textContent = "Asistencia guardada correctamente.";
    setTimeout(() => {
        mensaje.textContent = "";
    }, 2000);
}
function mostrarAlumnos() {
    lista.innerHTML = "";
    alumnos.forEach(function(alumno) {
        if (!asistencias[alumno]) {
            asistencias[alumno] = "Sin marcar";
        }
        let fila = document.createElement("div");
        fila.className = "fila-alumno";
        let nombre = document.createElement("span");
        nombre.className = "nombre-alumno";
        nombre.textContent = alumno;
        let opciones = document.createElement("div");
        opciones.className = "opciones-asistencia";
        let labelPresente = document.createElement("label");
        let presente = document.createElement("input");
        presente.type = "checkbox";
        presente.className = "checkbox-asistencia";
        presente.checked = asistencias[alumno] === "Presente";
        labelPresente.appendChild(presente);
        labelPresente.appendChild(document.createTextNode(" Presente"));
        let labelAusente = document.createElement("label");
        let ausente = document.createElement("input");
        ausente.type = "checkbox";
        ausente.className = "checkbox-asistencia";
        ausente.checked = asistencias[alumno] === "Ausente";
        labelAusente.appendChild(ausente);
        labelAusente.appendChild(document.createTextNode(" Ausente"));
        presente.onchange = function() {
            if (presente.checked) {
                ausente.checked = false;
                asistencias[alumno] = "Presente";
            } else {
                asistencias[alumno] = "Sin marcar";
            }
            guardarAsistencia();
        };
        ausente.onchange = function() {
            if (ausente.checked) {
                presente.checked = false;
                asistencias[alumno] = "Ausente";
            } else {
                asistencias[alumno] = "Sin marcar";
            }
            guardarAsistencia();
        };
        opciones.appendChild(labelPresente);
        opciones.appendChild(labelAusente);
        fila.appendChild(nombre);
        fila.appendChild(opciones);
        lista.appendChild(fila);
    });
}
mostrarAlumnos();