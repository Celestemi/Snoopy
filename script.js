function responder(respuesta) {
    const imagen = document.getElementById('imagen');
    const respuestaText = document.getElementById('respuesta');
    
    if (respuesta === 'si') {
        // Mostrar la imagen y mensaje si se responde "Sí"
        imagen.src = 'https://i.pinimg.com/736x/03/34/b0/0334b0c904f22e716b37bae10560a7aa.jpg'; // Cambia la URL por la imagen que prefieras
        imagen.style.display = 'block';
        respuestaText.innerHTML = 'Yupiiiiiiiiiiiiiiiiiiiii, pero si me vuelvo a desaparecer es culpa de mis compaleras que me dejan hacer muchas cosas.';
        
        // Después de 5 segundos, se cambia el contenido y las imágenes
        setTimeout(() => {
            imagen.src = 'https://i.pinimg.com/736x/c8/68/fe/c868fe1ea83a70e0df2bf68acf562a19.jpg';
            respuestaText.innerHTML = 'Serás mi San Valentín el 14, pero solo por un corto tiempo, porque es un día laborable y hay muchas cosas por hacer.';
        }, 5000);  // Espera 5 segundos antes de cambiar la imagen y el texto
    } else if (respuesta === 'no') {
        // Mostrar mensaje y llorar si se responde "No"
        imagen.src = 'https://i.pinimg.com/736x/ce/13/28/ce13284dbcb9d641fbe25265e587c267.jpg'; // Cambia la URL por la imagen que prefieras
        imagen.style.display = 'block';
        respuestaText.innerHTML = 'Si pusiste no, lloraré porque no me perdonaste y yo hice algo lindo';
    }
}
