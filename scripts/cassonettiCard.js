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

let cardContainerIdCounter = 0; // Variabile incrementale per gli ID

function createCard(containerId, title, state, distance) {
    const container = document.getElementById(containerId);
    const cardContainer = document.createElement('div');
    const cardContainerId = `card-container-${cardContainerIdCounter++}`;
    cardContainer.setAttribute('id', cardContainerId);
    cardContainer.classList.add('card-container2');
    cardContainer.style.display = 'none'; // Imposta display none per nascondere la card

    const card = document.createElement('div');
    card.classList.add('card');

    const containerInfo = document.createElement('div');
    containerInfo.classList.add('containerInfo');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const stateElement = document.createElement('p');
    stateElement.textContent = `Stato: ${state}`;

    const distanceElement = document.createElement('p');
    distanceElement.textContent = `Distanza: ${distance} metri`;

    const segnala = document.createElement('a');
    segnala.textContent = 'SEGNALA';
    segnala.href = '../templates/segnalazioni.html';

    containerInfo.appendChild(titleElement);
    card.appendChild(containerInfo);
    card.appendChild(stateElement);
    card.appendChild(distanceElement);
    card.appendChild(segnala);
    cardContainer.appendChild(card);
    container.appendChild(cardContainer);
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

    createCard('contenitore-tessereCasonetto', cassoPlastica, generateRandomState(), distance1);
    createCard('contenitore-tessereCasonetto', cassoCarta, generateRandomState(), distance2);
    createCard('contenitore-tessereCasonetto', cassoVetro, generateRandomState(), distance3);
    createCard('contenitore-tessereCasonetto', cassoLattine, generateRandomState(), distance4);
}
