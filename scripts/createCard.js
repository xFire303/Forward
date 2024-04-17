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
makeRequest('../php/get_data.php', 'GET', null, function (response) {
  let data = JSON.parse(response);

  // Itera sui dati e crea tessere per ciascun record
  data.forEach(function (record) {
    // Crea un nuovo elemento div per la tessera
    let tesseraDiv = document.createElement("div");
    tesseraDiv.classList.add("card-container");

    // Crea un nuovo elemento div per la tessera interna
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Crea un nuovo elemento div per il container delle informazioni
    let containerInfoDiv = document.createElement("div");
    containerInfoDiv.classList.add("containerInfo");

    let containerDataTessera = document.createElement("div");
    containerDataTessera.classList.add("containerDataTessera");

    // Aggiungi l'icona
    let img = document.createElement("img");
    img.classList.add("imgCard");
    img.src="../img/icons8-nfc-90.png"

    // Aggiungi gli elementi per i campi della tessera
    let nameSurname = document.createElement("h2");
    nameSurname.textContent = record.nome + " " + record.cognome;
    containerDataTessera.appendChild(nameSurname);

    let campoTessera = document.createElement("h2");
    campoTessera.textContent = "N°tessera";
    containerDataTessera.appendChild(campoTessera);

    let tesseraNum = document.createElement("h2");
    tesseraNum.textContent = record.nTessera;
    containerDataTessera.appendChild(tesseraNum);

    // Aggiungi l'icona al container delle informazioni
    containerInfoDiv.appendChild(containerDataTessera);
    containerInfoDiv.appendChild(img);

    // Aggiungi il container delle informazioni alla tessera
    cardDiv.appendChild(containerInfoDiv);
    

    // Aggiungi la tessera al contenitore
    tesseraDiv.appendChild(cardDiv);
    contenitore.appendChild(tesseraDiv);
  });
});
