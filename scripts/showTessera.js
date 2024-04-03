document.addEventListener("DOMContentLoaded", function () {
    const tessere = document.getElementById("contenitore-tessere");

    function checkFullScreen() {
        if (window.innerWidth === screen.width) {
            for (let i = 0; i < tessere.length; i++) {
                tessere[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < tessere.length; i++) {
                tessere[i].style.display = "none";
            }
        }
    }

    // Esegui la funzione inizialmente al caricamento della pagina
    checkFullScreen();

    // Aggiungi un listener per l'evento di ridimensionamento della finestra
    window.addEventListener("resize", checkFullScreen);
});
