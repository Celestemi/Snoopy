function responder(respuesta) {
    const mensaje = document.getElementById("mensaje");
    const snoopyImagen = document.getElementById("snoopy-img");
    const respuestaTexto = document.getElementById("respuesta");
    const gatosContainer = document.getElementById("gatos-container");

    if (respuesta === 'si') {
        // Mostrar imagen de Snoopy feliz
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Snoopy_happy.png";
        respuestaTexto.innerText = "¡Qué bien! Debes cuidarte mucho, que yo haré lo mismo.";
        respuestaTexto.classList.add("green-text");
        gatosContainer.style.display = "block"; // Mostrar gatos
        respuestaTexto.innerText += " Pero si vuelvo a ser un fantasma, no te enojes, soy un bebé.";
    } else if (respuesta === 'no') {
        // Mostrar imagen de Snoopy enojado
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Snoopy_enojado.png";
        respuestaTexto.innerText = "Debes cuidarte mucho, ¡no me hagas enojar!";
        respuestaTexto.classList.add("red-text");
        gatosContainer.style.display = "none"; // No mostrar los gatos
    }
}
