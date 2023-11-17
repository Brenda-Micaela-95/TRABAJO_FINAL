var imagenes = document.querySelectorAll('.contenedor img');
        var imagenActual = 0;

        setInterval(function() {
            imagenes[imagenActual].classList.remove('activar');

            imagenActual++;
            if (imagenActual >= imagenes.length) {
                imagenActual = 0;
            }

            imagenes[imagenActual].classList.add('activar');
        }, 5000);


        var prevButton = document.querySelector('.prev');
        var nextButton = document.querySelector('.next');

        prevButton.addEventListener('click', function() {
            imagenes[imagenActual].classList.remove('activar');

            imagenActual--;
            if (imagenActual < 0) {
                imagenActual = imagenes.length - 1;
            }

            imagenes[imagenActual].classList.add('activar');
        });

        nextButton.addEventListener('click', function() {
            imagenes[imagenActual].classList.remove('activar');

            imagenActual++;
            if (imagenActual >= imagenes.length) {
                imagenActual = 0;
            }

            imagenes[imagenActual].classList.add('activar');
        });


        