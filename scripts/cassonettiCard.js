function createCassonettiCard() {
    // Creazione del nuovo elemento div con classe tessera
    var tessera = document.createElement('div');
    tessera.className = 'tessera';

    // Creazione degli elementi h1 e h2 con i rispettivi testi vuoti
    var h2Nome = document.createElement('h2');
    var h2Cognome = document.createElement('h2');
    var h2NumeroTessera = document.createElement('h2');

    // Inserimento del testo nei tag h2
    let icona1 = casso1.getIcon();
    let icona2 = casso2.getIcon();
    let icona3 = casso3.getIcon();
    let icona4 = casso4.getIcon();

    let iconslist = [icona1, icona2, icona3, icona4];
    let urlIcona;

    for (let i = 0; i < iconslist.length; i++){
        urlIcona = iconslist[i].options.iconUrl;
    }

    if (urlIcona === plasticaIcon.options.iconUrl) {
        h2Nome.textContent = cassoPlastica;
    } else if (urlIcona === cartaIcon.options.iconUrl) {
        h2Nome.textContent = cassoCarta;
    } else if (urlIcona === vetroIcon.options.iconUrl) {
        h2Nome.textContent = cassoVetro;
    } else if (urlIcona === lattineIcon.options.iconUrl) {
        h2Nome.textContent = cassoLattine;
    } else {
        h2Nome.textContent = "Tipo di cassonetto non riconosciuto";
    }

    h2Cognome.textContent = 'Stato: ' + elementoCasuale;

    // Viene ascoltato l'evento : "distanceCalculated"
    // e la distanza viene recuperata dall'evento per essere utilizzata
    document.addEventListener('distanceCalculated', function(event) {
        var distance = event.detail;
        if (distance !== undefined) {
            h2NumeroTessera.textContent = 'Distanza: ' + distance.toFixed(0) + 'm';
        } else {
            h2NumeroTessera.textContent = 'Distanza: Informazione non disponibile';
        }
    });

    // Aggiunta degli elementi h2 al div tessera
    tessera.appendChild(h2Nome);
    tessera.appendChild(h2Cognome);
    tessera.appendChild(h2NumeroTessera);

    // Restituire il div tessera
    return tessera;
}

// Funzione per aggiungere una nuova tessera al contenitore delle tessere
function aggiungiTesseraAlContenitore(tessera) {
    // Ottieni il riferimento al contenitore delle tessere
    var contenitoreTessere = document.getElementById('contenitore-tessereCasonetto');

    // Aggiungi la tessera al contenitore
    contenitoreTessere.appendChild(tessera);
}

// Esempio di utilizzo
let tessera1 = createCassonettiCard();
let tessera2 = createCassonettiCard();
let tessera3 = createCassonettiCard();
let tessera4 = createCassonettiCard();
aggiungiTesseraAlContenitore(tessera1);
aggiungiTesseraAlContenitore(tessera2);
aggiungiTesseraAlContenitore(tessera3);
aggiungiTesseraAlContenitore(tessera4);