$(document).ready(function () {
    // Array di icone
    var icons = [
        new CassonettiIcons({ iconUrl: 'https://i.ibb.co/WH8wxT9/cass-blu.png' }),
        new CassonettiIcons({ iconUrl: 'https://i.ibb.co/yX81gQN/cass-giallo.png' }),
        new CassonettiIcons({ iconUrl: 'https://i.ibb.co/Kj9tRvv/cass-rosso.png' }),
        new CassonettiIcons({ iconUrl: 'https://i.ibb.co/4Wz9Tyw/Cass-nero.png' })
    ];

    var cardContainer = $('#contenitore-tessereCasonetto');
    var markerCards = {}; // Oggetto per associare marker alle rispettive tessere

    $.ajax({
        url: '../php/get_markers.php', // Inserisci il percorso al tuo file PHP
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (marker) {
                var lat = marker.latitudine;
                var lng = marker.longitudine;
                var id = marker.idMarker;

                // Seleziona casualmente un'icona dall'array di icone
                var randomIcon = icons[Math.floor(Math.random() * icons.length)];

                // Aggiungi il marker con l'icona casuale alla mappa
                var markerObj = L.marker([lat, lng], { icon: randomIcon }).addTo(map);

                // Creazione della card
                var card = $('<div class="card">');
                var containerInfo = $('<div class="containerInfo">');
                var title = $('<h3>').text('Titolo casuale');
                var status = $('<p>').text('Stato casuale');
                var distance = $('<p>').text('Distanza casuale');

                containerInfo.append(title, status, distance);
                card.append(containerInfo);

                // Associa il marker alla sua card
                markerCards[id] = card;

                // Aggiungi la card al contenitore, inizialmente nascosta
                cardContainer.append(card.hide());

                // Aggiungi un evento di clic al marker per mostrare la tessera corrispondente
                markerObj.on('click', function () {
                    // Nascondi tutte le altre tessere
                    $('.card').hide();
                    // Mostra la tessera corrispondente al marker cliccato
                    card.show();
                });
            });
        },
        error: function (xhr, status, error) {
            console.error('Errore durante il recupero dei dati:', error);
        }
    });
});
