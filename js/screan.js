document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        alert('No se permite capturar pantalla en este sitio.');
    }
});
// para video
const videoElement = document.getElementById('video');

        // Detectar cuando el usuario intenta cambiar de pestaña o capturar pantalla
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                videoElement.pause();
                alert('El video se ha pausado por seguridad.');
            }
        });