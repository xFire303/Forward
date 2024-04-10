let map = L.map('map').setView([45.4384, 10.9916], 13);
let currentLayer = null; // Memorizza il layer corrente

const lineHamburger = document.querySelectorAll('.line');
const navbar = document.querySelectorAll('.linkContainer');
const navLinks = document.querySelectorAll('.navLinks a');

// Aggiungi il layer iniziale
currentLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);  

function darkMap() {
    if (currentLayer) {
        map.removeLayer(currentLayer); // Rimuovi il layer corrente
    }
    currentLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    cartaicon.style.color = "white";
    lineHamburger.forEach(function(line) {
        line.style.backgroundColor = "white";
    });

    navbar.forEach(function(i) {
        i.style.backgroundColor = "black";
    });

    navLinks.forEach(function(i) {
        i.style.color = "white";
    });
}

function lightMap() {
    if (currentLayer) {
        map.removeLayer(currentLayer); // Rimuovi il layer corrente
    }
    currentLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    cartaicon.style.color = "black";
    lineHamburger.forEach(function(line) {
        line.style.backgroundColor = "black";
    });

    navbar.forEach(function(i) {
        i.style.backgroundColor = "white";
    });

    navLinks.forEach(function(i) {
        i.style.color = "black";
    });
}

document.getElementById('btnDarkMap').addEventListener('click', function (event) {
    event.preventDefault();
    darkMap();
});

document.getElementById('btnLightMap').addEventListener('click', function (event) {
    event.preventDefault();
    lightMap();
});
