function responder(respuesta) {
    let respuestaText = '';
    let respuestaImagen = '';
    let respuestaClass = '';

    // Mostrar el contenedor de la respuesta
    document.getElementById('respuesta-container').style.display = 'block';
    document.getElementById('san-valentin-container').style.display = 'none'; // Ocultar el San Valentín por ahora

    if (respuesta === 'si') {
        respuestaText = '¡Yupiiiiiiiiiiiiiiiiiiiii! Pero si me vuelvo a desaparecer es culpa de mis compaleras que me dejan hacer muchas cosas.';
        respuestaImagen = '<img src="https://i.pinimg.com/736x/03/34/b0/0334b0c904f22e716b37bae10560a7aa.jpg" alt="Yupiiii" />';
        respuestaClass = 'response-container-yes'; // Azul para "Sí"
    } else if (respuesta === 'no') {
        respuestaText = 'Si pusiste no, lloraré porque no me perdonaste y yo hice algo lindo.';
        respuestaImagen = '<img src="https://i.pinimg.com/736x/ce/13/28/ce13284dbcb9d641fbe25265e587c267.jpg" alt="Gato llorando" />';
        respuestaClass = 'response-container-no'; // Negro para "No"
    }

    // Actualizar texto e imagen en el contenedor
    document.getElementById('respuesta').innerText = respuestaText;
    document.getElementById('imagen-respuesta').innerHTML = respuestaImagen;

    // Cambiar el color del cuadro dependiendo de la respuesta
    document.getElementById('respuesta-container').className = 'response-container ' + respuestaClass;

    // Después de un pequeño tiempo (30 segundos), mostrar el cuadro de San Valentín
    setTimeout(function() {
        document.getElementById('san-valentin-container').style.display = 'block';
    }, 30000);
}
