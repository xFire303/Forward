let casso1 = L.marker([45.43, 10.98], {icon: plasticaIcon}).addTo(map);
let casso2 = L.marker([45.43, 11], {icon: cartaIcon}).addTo(map);
let casso3 = L.marker([45.43, 10.99], {icon: vetroIcon}).addTo(map);
let casso4 = L.marker([45.434, 10.99], {icon: lattineIcon}).addTo(map);

let cassoPlastica = "Cassonetto plastica";
let cassoCarta = "Cassonetto carta";
let cassoVetro = "Cassonetto vetro";
let cassoLattine = "Cassonetto lattine";

let stato = ['Pieno', 'Vuoto'];
let indiceCasuale = Math.floor(Math.random() * stato.length);
let elementoCasuale = stato[indiceCasuale];

const cards = document.getElementById("contenitore-tessereCasonetto");

casso1.bindPopup(`<b>${cassoPlastica}</b>`);
casso2.bindPopup(`<b>${cassoCarta}</b>`);
casso3.bindPopup(`<b>${cassoVetro}</b>`);
casso4.bindPopup(`<b>${cassoLattine}</b>`);

function onMarkerClick() {
    if (cards.style.display === "none" || cards.style.display === "") {
        cards.style.transition = "all 0.3s ease-in-out";
        cards.style.display = "block";
        cards.style.transition = "transform 0.3s ease-in-out";
        cards.style.transform = "translateY(100%)";
        setTimeout(() => {
            cards.style.transform = "translateY(0)";
        }, 10);
        mappa.style.height = `${altezzaDispositivo - 163}px`;
    } else {
        cards.style.transform = "translateY(100%)";
        setTimeout(() => {
            cards.style.display = "none";
        }, 300); // Attendere il completamento dell'animazione prima di nascondere definitivamente l'elemento
        mappa.style.height = `${altezzaDispositivo}px`;
    }
}

casso1.on('click', onMarkerClick);
casso2.on('click', onMarkerClick);
casso3.on('click', onMarkerClick);
casso4.on('click', onMarkerClick);