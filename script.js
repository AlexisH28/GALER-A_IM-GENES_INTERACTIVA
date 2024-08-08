document.addEventListener('DOMContentLoaded', () => {
    // Se logran obtener referencias a los elementos del DOM que se utilizarán.
    const botonAnadirImagen = document.getElementById('boton-anadir-imagen');
    const galeria = document.getElementById('galeria');
    const inputUrlImagen = document.getElementById('url-imagen');
    const inputTituloImagen = document.getElementById('titulo-imagen');
    const modalImagen = document.getElementById('modal-imagen');
    const imagenModal = document.getElementById('imagen-modal');
    const tituloModal = document.getElementById('titulo-modal');
    const botonCerrarModal = document.getElementsByClassName('cerrar')[0];

    // Se definen un conjunto de imágenes que aparecerán al momento de ejecutar la página.
    const imagenesIniciales = [
        { url: 'https://loscoches.com/wp-content/uploads/2021/04/carros-deportivos-potencia.jpg', titulo: 'Mustang' },
        { url: 'https://static.wixstatic.com/media/3104c9_e4cba66950b8452e9367826ac9895ac0~mv2.png/v1/fill/w_480,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3104c9_e4cba66950b8452e9367826ac9895ac0~mv2.png', titulo: 'R15' },
        { url: 'https://www.shutterstock.com/image-photo/frankfurt-sept-2015-bugatti-chiron-600nw-1253646895.jpg', titulo: 'Bugatti Veyron' },
        { url: 'https://content.media.mcdn.es/api/v1/mnet-media/images/52/5284172f-dc95-4d34-a7ed-0e29ed28336e?rule=articleBodyImage', titulo: 'Kawasaki Eliminator' },
        { url: 'https://content.media.mcdn.es/api/v1/mnet-media/images/2e/2e09651a-ac00-432a-8644-b717c3d255d4?rule=articleBodyImage', titulo: 'Kawasaki Ninja' },
    ];

    // Itera sobre las imágenes predeterminadas y las añade a la galería.
    imagenesIniciales.forEach(({ url, titulo }) => {
        agregarImagenAGaleria(url, titulo);
    });

    // Se añade un evento al botón para añadir una nueva imagen a la galería.
    botonAnadirImagen.addEventListener('click', () => {
        const urlImagen = inputUrlImagen.value;
        const tituloImagen = inputTituloImagen.value;

        // Se verifica que ambos campos tengan valores antes de añadir la imagen.
        if (urlImagen && tituloImagen) {
            agregarImagenAGaleria(urlImagen, tituloImagen);
            
            inputUrlImagen.value = '';
            inputTituloImagen.value = '';
        } else {
            // Muestra una alerta si alguno de los campos está vacío.
            alert('Por favor, ingrese una URL y un título para la imagen.');
        }
    });

    // Se añade un evento para cerrar el modal cuando se hace clic en el botón de cerrar.
    botonCerrarModal.addEventListener('click', () => {
        modalImagen.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modalImagen) {
            modalImagen.style.display = 'none';
        }
    });

    // Función para agregar una imagen a la galería con su título y botones.
    function agregarImagenAGaleria(urlImagen, tituloImagen) {
        // Se Crea un contenedor para la imagen y sus elementos asociados
        const elementoGaleria = document.createElement('div');
        elementoGaleria.classList.add('elemento-galeria');

        // Se Crea el elemento de la imagen y establece su fuente
        const imagen = document.createElement('img');
        imagen.src = urlImagen;

        // Se Crea un título para la imagen
        const titulo = document.createElement('h3');
        titulo.textContent = tituloImagen;

        // Se implementa un botón para eliminar la imagen de la galería.
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            // Se añade una clase para la animación de desvanecimiento y luego elimina el elemento.
            elementoGaleria.classList.add('desvanecer');
            elementoGaleria.addEventListener('transitionend', (event) => {
                if (event.target === elementoGaleria && elementoGaleria.classList.contains('desvanecer')) {
                    elementoGaleria.remove();
                }
            });
        });

        // Se implementa la creación un botón para ver los detalles de la imagen en un modal.
        const botonDetalles = document.createElement('button');
        botonDetalles.textContent = 'Ver Detalles';
        botonDetalles.classList.add('boton-detalles');
        botonDetalles.addEventListener('click', () => {
            // Muestra el modal y establece la imagen y título en el modal.
            modalImagen.style.display = 'block';
            imagenModal.src = urlImagen;
            tituloModal.textContent = tituloImagen;
        });

        // Se añade la imagen, el título y los botones al contenedor del elemento de la galería.
        elementoGaleria.appendChild(imagen);
        elementoGaleria.appendChild(titulo);
        elementoGaleria.appendChild(botonEliminar);
        elementoGaleria.appendChild(botonDetalles);

        // Se añade el nuevo elemento de la galería al contenedor principal de la galería.
        galeria.appendChild(elementoGaleria);

        // Se añade una animación para que la imagen aparezca suavemente en la galería.
        requestAnimationFrame(() => {
            elementoGaleria.classList.add('aparecer');
        });
    }
});