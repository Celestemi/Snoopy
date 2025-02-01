function responder(respuesta) {
    let respuestaText = '';
    let respuestaImagen = '';

    // Mostrar el contenedor de la respuesta
    document.getElementById('respuesta-container').style.display = 'block';
    document.getElementById('san-valentin-container').style.display = 'none'; // Ocultar el San Valentín por ahora

    if (respuesta === 'si') {
        respuestaText = '¡Yupiiiiiiiiiiiiiiiiiiiii! But if I disappear again...';
        respuestaImagen = '<img src="https://i.pinimg.com/736x/03/34/b0/0334b0c904f22e716b37bae10560a7aa.jpg" alt="Yupiiii" />';
    } else if (respuesta === 'no') {
        respuestaText = 'I hope you didn't put no, if so: Why wouldn't you?';
        respuestaImagen = '<img src="https://i.pinimg.com/736x/ce/13/28/ce13284dbcb9d641fbe25265e587c267.jpg" alt="Gato llorando" />';
    }

    // Actualizar texto e imagen en el contenedor
    document.getElementById('respuesta').innerText = respuestaText;
    document.getElementById('imagen-respuesta').innerHTML = respuestaImagen;

    // Después de un pequeño tiempo (30 segundos), mostrar el cuadro de San Valentín
    setTimeout(function() {
        document.getElementById('san-valentin-container').style.display = 'block';
    }, 30000);
}
