
let intentos = 0;
let bloqueado = false;
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    if (bloqueado) {
        return;
    }
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let mensaje = document.getElementById("mensaje");
    if (usuario === "admin" && contraseña === "admin") {
        localStorage.setItem("usuarioActivo", "admin");
        window.location.href = "admin.html";
    }
    else if (usuario === "user" && contraseña === "user") {
        localStorage.setItem("usuarioActivo", "user");
        window.location.href = "user.html";
    }
    else if (usuario === "invitado" && contraseña === "1234") {
        localStorage.setItem("usuarioActivo", "invitado");
        window.location.href = "invitado.html";
    }
    else {
        intentos++;
        if (intentos === 3) {
            mensaje.textContent = "Usuario o contraseña incorrectos";
        }
        else if (intentos === 5) {
            bloqueado = true;
            mensaje.textContent = "Esperá 30 segundos para volver a intentar.";
            document.getElementById("usuario").disabled = true;
            document.getElementById("contraseña").disabled = true;
            document.querySelector("button").disabled = true;
            setTimeout(function() {
                bloqueado = false;
                intentos = 0;
                document.getElementById("usuario").disabled = false;
                document.getElementById("contraseña").disabled = false;
                document.querySelector("button").disabled = false;
                mensaje.textContent = "";
                document.getElementById("usuario").value = "";
                document.getElementById("contraseña").value = "";
            }, 30000);
        }
        else {
            mensaje.textContent = "Usuario o contraseña incorrectos";
        }
    }
});
