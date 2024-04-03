// Rileva l'altezza del dispositivo
const altezzaDispositivo = window.innerHeight;

// Imposta l'altezza della mappa
const mappa = document.getElementById('map');
mappa.style.height = `${altezzaDispositivo}px`;