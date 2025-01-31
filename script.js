function responder(respuesta) {
    const mensaje = document.getElementById("mensaje");
    const snoopyImagen = document.getElementById("snoopy-img");
    const respuestaTexto = document.getElementById("respuesta");

    if (respuesta === 'si') {
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Snoopy_happy.png"; // Snoopy feliz
        respuestaTexto.innerText = "¡Qué bien! Debes cuidarte mucho, que yo haré lo mismo.";
        respuestaTexto.style.color = "green";
    } else if (respuesta === 'no') {
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Snoopy_enojado.png"; // Snoopy enojado
        respuestaTexto.innerText = "Debes cuidarte mucho, ¡no me hagas enojar!";
        respuestaTexto.style.color = "red";
    }
}
