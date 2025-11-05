window.addEventListener('load', () => {
  const loading = document.getElementById('loading');

  // Detecta si la cámara arranca
  const checkCam = setInterval(() => {
    const video = document.querySelector('video');
    if (video && video.readyState >= 2) {
      loading.style.display = 'none';
      clearInterval(checkCam);
    }
  }, 500);

  // Si no hay cámara, mostrar mensaje
  setTimeout(() => {
    const video = document.querySelector('video');
    if (!video || video.readyState < 2) {
      loading.innerHTML = "No se pudo acceder a la cámara. Revisá los permisos.";
    }
  }, 5000);
});
