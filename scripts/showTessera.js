const tessere = document.getElementById("contenitore-tessera");
const cartaicon = document.getElementById("cartaIcon");

const percentuale = 0.8;

function showTessera() {
    if (tessere.style.display === "none" || tessere.style.display === "") {
        tessere.style.transition = "all 0.3s ease-in-out";
        tessere.style.display = "flex";
        tessere.style.transition = "transform 0.3s ease-in-out";
        tessere.style.bottom = "0px";
        tessere.style.transform = "translateY(100%)";
        cartaicon.style.bottom = `${(altezzaDispositivo / 10) * 2.3}px`;
        cards.style.display = "none";
        setTimeout(() => {
            tessere.style.transform = "translateY(0)";
        }, 10);
    } else {
        tessere.style.transform = "translateY(100%)";
        setTimeout(() => {
            tessere.style.display = "none";
        }, 300);
        cartaicon.style.bottom = "25px";
    }
}

// Aggiungi un listener per l'evento click sulla carta
cartaicon.addEventListener("click", showTessera);