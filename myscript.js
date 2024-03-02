function zoomImage(imgElement) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');

    fullscreenImage.src = "gameSample.png";
    fullscreenContainer.style.display = 'flex';
  }

  function closeFullscreen() {
    document.getElementById('fullscreen-container').style.display = 'none';
  }