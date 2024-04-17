// Rileva l'altezza del dispositivo
const altezzaDispositivo = window.innerHeight;
const larghezzaDispositivo = window.innerWidth;

// Imposta l'altezza della mappa
const mappa = document.getElementById('map');
mappa.style.height = `${altezzaDispositivo}px`;