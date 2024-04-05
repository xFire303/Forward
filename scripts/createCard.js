// Seleziona il contenitore dove aggiungere le tessere
let contenitore = document.getElementById("contenitore-tessera");

// Mappatura dei nomi dei campi della tessera
let campiMapping = {
  "nome": "Nome:",
  "cognome": "Cognome:",
  "nTessera": "Numero Tessera:"
};

// Funzione per fare una richiesta AJAX
function makeRequest(url, method, data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.error('Si è verificato un errore durante la richiesta.');
      }
    }
  };
  xhr.send(data);
}

// Fai una richiesta al server PHP per ottenere i dati dalla tabella del database
makeRequest('../php/get_data.php', 'GET', null, function(response) {
  let data = JSON.parse(response);

  // Itera sui dati e crea tessere per ciascun record
  data.forEach(function(record) {
    // Crea un nuovo elemento div per la tessera
    let tesseraDiv = document.createElement("div");
    tesseraDiv.classList.add("card-container");

    // Crea un nuovo elemento div per la tessera interna
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Crea un nuovo elemento div per il lato della tessera
    let sideDiv = document.createElement("div");
    sideDiv.classList.add("side");

    // Crea e aggiungi gli elementi per i campi della tessera
    Object.keys(record).forEach(function(key) {
      let fieldDiv = document.createElement("div");
      fieldDiv.classList.add("field");

      let label = document.createElement("label");
      label.textContent = campiMapping[key] || key + ":"; // Usa il mapping dei nomi dei campi se disponibile, altrimenti usa il nome del campo originale

      let valueDiv = document.createElement("div");
      valueDiv.textContent = record[key];

      fieldDiv.appendChild(label);
      fieldDiv.appendChild(valueDiv);

      sideDiv.appendChild(fieldDiv);
    });

    // Aggiungi il lato della tessera al div della tessera
    cardDiv.appendChild(sideDiv);

    // Aggiungi la tessera al contenitore
    tesseraDiv.appendChild(cardDiv);
    contenitore.appendChild(tesseraDiv);
  });
});
