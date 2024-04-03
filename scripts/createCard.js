// Seleziona il contenitore dove aggiungere le tessere
let contenitore = document.getElementById("contenitore-tessera");

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
let campi = [
  { label: "Nome:", value: "Mario" },
  { label: "Cognome:", value: "Rossi" },
  { label: "Numero Tessera:", value: "9238 3309" }
];

campi.forEach(function(campo) {
  let fieldDiv = document.createElement("div");
  fieldDiv.classList.add("field");

  let label = document.createElement("label");
  label.setAttribute("for", campo.label.toLowerCase().replace(":", ""));
  label.textContent = campo.label;

  let valueDiv = document.createElement("div");
  valueDiv.id = campo.label.toLowerCase().replace(":", "");
  valueDiv.textContent = campo.value;

  fieldDiv.appendChild(label);
  fieldDiv.appendChild(valueDiv);

  sideDiv.appendChild(fieldDiv);
});

// Aggiungi il lato della tessera al div della tessera
cardDiv.appendChild(sideDiv);

// Aggiungi la tessera al contenitore
tesseraDiv.appendChild(cardDiv);
contenitore.appendChild(tesseraDiv);
