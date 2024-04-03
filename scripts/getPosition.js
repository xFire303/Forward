map.locate({ setView: true, maxZoom: 16 });
let distance;

function onLocationFound(e) {
    let radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Ti trovi entro " + radius + " metri da questo punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);

    let latLng1 = casso1.getLatLng();

    distance = e.latlng.distanceTo(latLng1);

    // Evento personalizzato di nome: "distanceCalculated"
    // L'opzione detail consente di allegare dati aggiuntivi all'evento
    // In questo caso, allego la distanza calcolata alla chiave detail.
    document.dispatchEvent(new CustomEvent('distanceCalculated', { detail: distance }));
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);