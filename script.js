function responder(respuesta) {
    const mensaje = document.getElementById("mensaje");
    const snoopyImagen = document.getElementById("snoopy-img");
    const respuestaTexto = document.getElementById("respuesta");
    const gatosContainer = document.getElementById("gatos-container");
    const snoopyImagenContainer = document.getElementById("snoopy-imagen");

    // Mostrar mensaje y efectos según la respuesta
    if (respuesta === 'si') {
        // Mostrar imagen de Snoopy feliz
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Snoopy_happy.png"; // Snoopy feliz
        respuestaTexto.innerText = "¡Qué bien! Debes cuidarte mucho, que yo haré lo mismo.";
        respuestaTexto.style.color = "green";
        // Mostrar imágenes de gatos felices
        gatosContainer.style.display = "block";
        // Agregar el mensaje extra con los gatos
        respuestaTexto.innerText += " Pero si vuelvo a ser un fantasma, no te enojes, no puedes hacerlo, soy un bebé.";
    } else if (respuesta === 'no') {
        // Mostrar imagen de Snoopy enojado
        snoopyImagen.src = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Snoopy_enojado.png"; // Snoopy enojado
        respuestaTexto.innerText = "Debes cuidarte mucho, ¡no me hagas enojar!";
        respuestaTexto.style.color = "red";
        // Hacer que el texto no sea tan pequeño
        respuestaTexto.style.fontSize = "24px";
        gatosContainer.style.display = "none"; // No mostrar los gatos en esta opción
    }
}
