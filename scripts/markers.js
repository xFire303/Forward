let casso1 = L.marker([45.43, 10.98], { icon: plasticaIcon }).addTo(map);
let casso2 = L.marker([45.43, 11], { icon: cartaIcon }).addTo(map);
let casso3 = L.marker([45.43, 10.99], { icon: vetroIcon }).addTo(map);
let casso4 = L.marker([45.434, 10.99], { icon: lattineIcon }).addTo(map);

let cassoPlastica = "Cassonetto plastica";
let cassoCarta = "Cassonetto carta";
let cassoVetro = "Cassonetto vetro";
let cassoLattine = "Cassonetto lattine";

const cards = document.getElementById("contenitore-tessereCasonetto");

const tesseraUtente = document.getElementById("contenitore-tessera");

casso1.bindPopup(`<h2>${cassoPlastica}</h2>`);
casso2.bindPopup(`<h2>${cassoCarta}</h2>`);
casso3.bindPopup(`<h2>${cassoVetro}</h2>`);
casso4.bindPopup(`<h2>${cassoLattine}</h2>`);

function onMarkerClick(containerId) {
    const clickedCard = document.getElementById(containerId);

    // Nascondi tutte le tessere tranne quella cliccata
    const allCards = document.querySelectorAll('.card-container2');
    allCards.forEach(card => {
        if (card.id !== containerId) {
            card.style.display = 'none';
        }
    });

    // Mostra la tessera cliccata
    if (clickedCard.style.display === "none" || clickedCard.style.display === "") {
        cards.style.display = "flex";
        clickedCard.style.transition = "all 0.3s ease-in-out";
        clickedCard.style.display = "flex";
        cards.style.bottom = "0px";
        clickedCard.style.transition = "transform 0.3s ease-in-out";
        clickedCard.style.transform = "translateY(100%)";
        tessere.style.display = "none";
        setTimeout(() => {
            clickedCard.style.transform = "translateY(0)";
        }, 10);
        cartaicon.style.bottom = `${(altezzaDispositivo / 10) * 2.4}px`;
    } else {
        clickedCard.style.transform = "translateY(100%)";
        setTimeout(() => {
            clickedCard.style.display = "none";
        }, 300);
        cartaicon.style.bottom = "25px";
        cards.style.display = "none";
    }
}

casso1.on('click', () => onMarkerClick('card-container-0'));
casso2.on('click', () => onMarkerClick('card-container-1'));
casso3.on('click', () => onMarkerClick('card-container-2'));
casso4.on('click', () => onMarkerClick('card-container-3'));

