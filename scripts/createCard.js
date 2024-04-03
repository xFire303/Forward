function createCard(nome, cognome, numeroTessera) {
    // Creazione del nuovo elemento div con classe tessera
    var tessera = document.createElement('div');
    tessera.className = 'tessera';

    // Creazione degli elementi h1 e h2 con i rispettivi testi vuoti
    var h2Nome = document.createElement('h2');
    var h2Cognome = document.createElement('h2');
    var h2NumeroTessera = document.createElement('h2');

    // Inserimento del testo nei tag h2
    h2Nome.textContent = 'Nome: ' + nome;
    h2Cognome.textContent = 'Cognome: ' + cognome;
    h2NumeroTessera.textContent = 'N° tessera: ' + numeroTessera;

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
    var contenitoreTessere = document.getElementById('contenitore-tessere');

    // Aggiungi la tessera al contenitore
    contenitoreTessere.appendChild(tessera);
}

// Esempio di utilizzo
var nuovaTessera = createCard('Mario', 'Rossi', '9238 3309');
aggiungiTesseraAlContenitore(nuovaTessera);