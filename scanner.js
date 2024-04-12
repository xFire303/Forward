document.addEventListener('DOMContentLoaded', function() {
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

    scanner.addListener('scan', function (content) {
        alert('Codice QR trovato: ' + content);
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('Nessuna fotocamera trovata.');
        }
    }).catch(function (e) {
        console.error(e);
    });
});
