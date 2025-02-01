function respond(response) {
    let responseText = '';
    let responseImage = '';
    let responseClass = '';

    // Escondemos el cuadro de la pregunta
    document.getElementById('question-box').style.display = 'none';
    
    // Mostramos el cuadro de respuesta
    document.getElementById('response-container').style.display = 'block';
    document.getElementById('san-valentine-container').style.display = 'none'; // Escondemos el mensaje de San Valentín

    // Comprobamos la respuesta
    if (response === 'yes') {
        responseText = 'Yupiiiiiiiiiiiiiiiiiiiii! But if I disappear again, it’s because of my colleagues who make me do too many things.';
        responseImage = '<img src="https://i.pinimg.com/736x/03/34/b0/0334b0c904f22e716b37bae10560a7aa.jpg" alt="Yupiiii" />';
        responseClass = 'response-container-yes'; // Azul para Sí
    } else if (response === 'no') {
        responseText = 'If you selected no, I will cry because you didn’t forgive me, and I did something nice.';
        responseImage = '<img src="https://i.pinimg.com/736x/ce/13/28/ce13284dbcb9d641fbe25265e587c267.jpg" alt="Crying cat" />';
        responseClass = 'response-container-no'; // Negro para No
    }

    // Insertamos el texto y la imagen
    document.getElementById('response').innerText = responseText;
    document.getElementById('image-response').innerHTML = responseImage;

    // Cambiamos la clase para el cuadro de respuesta
    document.getElementById('response-container').className = 'response-container ' + responseClass;

    // Mostramos el mensaje de San Valentín después de 30 segundos
    setTimeout(function() {
        document.getElementById('san-valentine-container').style.display = 'block';
    }, 30000);
}
