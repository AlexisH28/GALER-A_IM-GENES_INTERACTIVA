// Espera a que el contenido del DOM se haya cargado por completo
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene referencias a los elementos del DOM
    const botonAnadirImagen = document.getElementById('boton-anadir-imagen');
    const galeria = document.getElementById('galeria');
    const inputUrlImagen = document.getElementById('url-imagen');
    const inputTituloImagen = document.getElementById('titulo-imagen');
    const modalImagen = document.getElementById('modal-imagen');
    const imagenModal = document.getElementById('imagen-modal');
    const tituloModal = document.getElementById('titulo-modal');
    const botonCerrarModal = document.getElementsByClassName('cerrar')[0];

    // Añade un event listener al botón para añadir imágenes a la galería
    botonAnadirImagen.addEventListener('click', () => {
        // Obtiene los valores de los campos de entrada
        const urlImagen = inputUrlImagen.value;
        const tituloImagen = inputTituloImagen.value;

        // Verifica que ambos campos tengan valores
        if (urlImagen && tituloImagen) {
            // Crea un nuevo elemento div para la imagen de la galería
            const elementoGaleria = document.createElement('div');
            elementoGaleria.classList.add('elemento-galeria');

            // Crea un elemento img y establece su atributo src
            const imagen = document.createElement('img');
            imagen.src = urlImagen;

            // Crea un elemento h3 y establece su texto
            const titulo = document.createElement('h3');
            titulo.textContent = tituloImagen;

            // Crea un botón para eliminar la imagen
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                // Añade una clase para la animación de desvanecimiento y elimina el elemento después de la transición
                elementoGaleria.classList.add('desvanecer');
                elementoGaleria.addEventListener('animationend', (event) => {
                    if (event.target === elementoGaleria && elementoGaleria.classList.contains('desvanecer')) {
                        elementoGaleria.remove();
                    }
                });
            });

            // Crea un botón para ver los detalles de la imagen
            const botonDetalles = document.createElement('button');
            botonDetalles.textContent = 'Ver Detalles';
            botonDetalles.classList.add('boton-detalles');
            botonDetalles.addEventListener('click', () => {
                // Muestra el modal y establece el contenido de la imagen y el título
                modalImagen.style.display = 'block';
                imagenModal.src = urlImagen;
                tituloModal.textContent = tituloImagen;
            });

            // Añade la imagen, el título y los botones al elemento de la galería
            elementoGaleria.appendChild(imagen);
            elementoGaleria.appendChild(titulo);
            elementoGaleria.appendChild(botonEliminar);
            elementoGaleria.appendChild(botonDetalles);

            // Añade el nuevo elemento de la galería al contenedor principal de la galería
            galeria.appendChild(elementoGaleria);

            // Añade una clase para la animación de aparición
            requestAnimationFrame(() => {
                elementoGaleria.classList.add('aparecer');
            });

            // Limpia los campos de entrada
            inputUrlImagen.value = '';
            inputTituloImagen.value = '';
        } else {
            // Muestra una alerta si alguno de los campos está vacío
            alert('Por favor, ingrese una URL y un título para la imagen.');
        }
    });

    // Añade un event listener para cerrar el modal
    botonCerrarModal.addEventListener('click', () => {
        modalImagen.style.display = 'none';
    });

    // Cierra el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == modalImagen) {
            modalImagen.style.display = 'none';
        }
    });
});