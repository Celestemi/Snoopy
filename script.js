function responder(respuesta) {
    const mensaje = document.getElementById("mensaje");
    const imagenesContainer = document.getElementById("imagenes-container");
    const respuestaTexto = document.getElementById("respuesta");

    if (respuesta === 'si') {
        // Limpiar el contenedor de imágenes
        imagenesContainer.innerHTML = '';

        // Agregar las imágenes de Snoopy
        const snoopyImage1 = document.createElement('img');
        snoopyImage1.src = "https://i.pinimg.com/736x/03/34/b0/0334b0c904f22e716b37bae10560a7aa.jpg";
        imagenesContainer.appendChild(snoopyImage1);

        // Luego de 30 segundos, agregar las imágenes de los gatitos
        setTimeout(function() {
            const gatosAbrazadores = document.createElement('div');
            gatosAbrazadores.innerHTML = `
                <img src="https://i.pinimg.com/736x/05/5f/e2/055fe285b460e387127ceaa7f5c732ba.jpg" alt="Gatitos abrazadores">
            `;
            imagenesContainer.appendChild(gatosAbrazadores);
            respuestaTexto.innerText += " Por cierto, eres mi San Valentín y solo quiero que te conectes 5 minutos y sigas con tus cosas, sé que no es algo que te celebro.";
        }, 30000);
    } else if (respuesta === 'no') {
        // Limpiar el contenedor de imágenes
        imagenesContainer.innerHTML = '';

        // Mostrar imagen de gato llorando y mensaje
        imagenesContainer.style.display = 'block';
        respuestaTexto.innerText = "¡No puedes no perdonarme! Eso sería un delito y te denunciaré. Ahora, pon Sí.";
        respuestaTexto.classList.add("red-text");

        // Agregar la imagen de gato llorando
        const gatoLlorando = document.createElement('img');
        gatoLlorando.src = "https://i.pinimg.com/736x/ce/13/28/ce13284dbcb9d641fbe25265e587c267.jpg";
        imagenesContainer.appendChild(gatoLlorando);
    }
}
