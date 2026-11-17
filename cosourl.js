(function() {
    let usuarioActivo = localStorage.getItem("usuarioActivo");
    let path = window.location.pathname;
    let pagina = path.substring(path.lastIndexOf("/") + 1);
    if (pagina === "admin.html" && usuarioActivo !== "admin") {
        window.location.replace("index.html");
        return;
    }
    if (pagina === "user.html" && usuarioActivo !== "user") {
        window.location.replace("index.html");
        return;
    }
    if (pagina === "invitado.html" && usuarioActivo !== "invitado") {
        window.location.replace("index.html");
        return;
    }
})();
