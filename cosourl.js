(function() {
    let usuarioActivo = localStorage.getItem("usuarioActivo");
    let pagina = window.location.pathname.split("/").pop();
    if (pagina === "admin.html" && usuarioActivo !== "admin") {
        window.location.replace("index.html");
    }
    if (pagina === "user.html" && usuarioActivo !== "user") {
        window.location.replace("index.html");
    }
    if (pagina === "invitado.html" && usuarioActivo !== "invitado") {
        window.location.replace("index.html");
    }
})();

