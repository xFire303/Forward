const tessere = document.getElementById("contenitore-tessera");
const cartaicon = document.getElementById("cartaicon");

function showTessera() {
    if (tessere.style.display === "none" || tessere.style.display === "") {
        tessere.style.transition = "all 0.3s ease-in-out";
        tessere.style.display = "flex";
        tessere.style.transition = "transform 0.3s ease-in-out";
        tessere.style.transform = "translateY(100%)";
        setTimeout(() => {
            tessere.style.transform = "translateY(0)";
        }, 10);
        mappa.style.height = `${altezzaDispositivo - 163}px`;
    } else {
        tessere.style.transform = "translateY(100%)";
        setTimeout(() => {
            tessere.style.display = "none";
        }, 300);
        mappa.style.height = `${altezzaDispositivo}px`;
    }
}

// Aggiungi un listener per l'evento click sulla carta
cartaicon.addEventListener("click", showTessera);