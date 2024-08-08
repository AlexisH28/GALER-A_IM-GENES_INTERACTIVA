document.addEventListener('DOMContentLoaded', () => {
    const botonAnadirImagen = document.getElementById('boton-anadir-imagen');
    const galeria = document.getElementById('galeria');
    const inputUrlImagen = document.getElementById('url-imagen');
    const inputTituloImagen = document.getElementById('titulo-imagen');
    const modalImagen = document.getElementById('modal-imagen');
    const imagenModal = document.getElementById('imagen-modal');
    const tituloModal = document.getElementById('titulo-modal');
    const botonCerrarModal = document.getElementsByClassName('cerrar')[0];

    botonAnadirImagen.addEventListener('click', () => {
        const urlImagen = inputUrlImagen.value;
        const tituloImagen = inputTituloImagen.value;

        if (urlImagen && tituloImagen) {
            const elementoGaleria = document.createElement('div');
            elementoGaleria.classList.add('elemento-galeria');

            const imagen = document.createElement('img');
            imagen.src = urlImagen;

            const titulo = document.createElement('h3');
            titulo.textContent = tituloImagen;

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                elementoGaleria.classList.add('desvanecer');
                elementoGaleria.addEventListener('transitionend', () => {
                    elementoGaleria.remove();
                });
            });

            const botonDetalles = document.createElement('button');
            botonDetalles.textContent = 'Ver Detalles';
            botonDetalles.classList.add('boton-detalles');
            botonDetalles.addEventListener('click', () => {
                modalImagen.style.display = 'block';
                imagenModal.src = urlImagen;
                tituloModal.textContent = tituloImagen;
            });

            elementoGaleria.appendChild(imagen);
            elementoGaleria.appendChild(titulo);
            elementoGaleria.appendChild(botonEliminar);
            elementoGaleria.appendChild(botonDetalles);

            galeria.appendChild(elementoGaleria);

            imagen.classList.add('aparecer');
            inputUrlImagen.value = '';
            inputTituloImagen.value = '';
        } else {
            alert('Por favor, ingrese una URL y un título para la imagen.');
        }
    });

    botonCerrarModal.addEventListener('click', () => {
        modalImagen.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modalImagen) {
            modalImagen.style.display = 'none';
        }
    });
});