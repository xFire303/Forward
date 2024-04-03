map.locate({ setView: true, maxZoom: 16 });
let distance;

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Funzione per generare lo stato casuale delle tessere
function generateRandomState() {
    const states = ["Pieno", "Vuoto", "75%", "50%"];
    return states[Math.floor(Math.random() * states.length)];
}

// Funzione per calcolare la distanza tra due coordinate geografiche
function calculateDistance(latlng1, latlng2) {
    return Math.round(latlng1.distanceTo(latlng2));
}

// Funzione per creare una tessera con le informazioni fornite
function createCard(containerId, name, state, distance) {
    const container = document.getElementById(containerId);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${name}</h3>
        <p>Stato: ${state}</p>
        <p>Distanza: ${distance} metri</p>
    `;
    container.appendChild(card);
}

function onLocationFound(e) {
    let radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Ti trovi entro " + radius + " metri da questo punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);

    let latLng1 = casso1.getLatLng();
    let latLng2 = casso2.getLatLng();
    let latLng3 = casso3.getLatLng();
    let latLng4 = casso4.getLatLng();

    let distance1 = calculateDistance(e.latlng, latLng1);
    let distance2 = calculateDistance(e.latlng, latLng2);
    let distance3 = calculateDistance(e.latlng, latLng3);
    let distance4 = calculateDistance(e.latlng, latLng4);

    createCard('contenitore-tessereCasonetto1', cassoPlastica, generateRandomState(), distance1);
    createCard('contenitore-tessereCasonetto2', cassoCarta, generateRandomState(), distance2);
    createCard('contenitore-tessereCasonetto3', cassoVetro, generateRandomState(), distance3);
    createCard('contenitore-tessereCasonetto4', cassoLattine, generateRandomState(), distance4);
}