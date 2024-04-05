let casso1 = L.marker([45.43, 10.98], { icon: plasticaIcon }).addTo(map);
let casso2 = L.marker([45.43, 11], { icon: cartaIcon }).addTo(map);
let casso3 = L.marker([45.43, 10.99], { icon: vetroIcon }).addTo(map);
let casso4 = L.marker([45.434, 10.99], { icon: lattineIcon }).addTo(map);

let cassoPlastica = "Cassonetto plastica";
let cassoCarta = "Cassonetto carta";
let cassoVetro = "Cassonetto vetro";
let cassoLattine = "Cassonetto lattine";

const cards1 = document.getElementById("contenitore-tessereCasonetto1");
const cards2 = document.getElementById("contenitore-tessereCasonetto2");
const cards3 = document.getElementById("contenitore-tessereCasonetto3");
const cards4 = document.getElementById("contenitore-tessereCasonetto4");

const tesseraUtente = document.getElementById("contenitore-tessera");

casso1.bindPopup(`<b>${cassoPlastica}</b>`);
casso2.bindPopup(`<b>${cassoCarta}</b>`);
casso3.bindPopup(`<b>${cassoVetro}</b>`);
casso4.bindPopup(`<b>${cassoLattine}</b>`);

function onMarkerClick(cards, altezzaDispositivo) {
    const allCards = document.querySelectorAll(".tessere-cassonetto");
    allCards.forEach(card => {
        if (card !== cards && card.style.display !== "none") {
            card.style.transform = "translateY(100%)";
            setTimeout(() => {
                card.style.display = "none";
                tesseraUtente.style.display = "none";
            }, 300);
        }
    });

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
        }, 300);
        mappa.style.height = `${altezzaDispositivo}px`;
    }
}


casso1.on('click', () => onMarkerClick(cards1, altezzaDispositivo));
casso2.on('click', () => onMarkerClick(cards2, altezzaDispositivo));
casso3.on('click', () => onMarkerClick(cards3, altezzaDispositivo));
casso4.on('click', () => onMarkerClick(cards4, altezzaDispositivo));
