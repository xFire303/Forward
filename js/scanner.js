const video = document.getElementById('preview');
const scanButton = document.getElementById('scanButton');

scanButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = stream;

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: video
        },
        decoder: {
            readers: ["code_128_reader", "ean_reader", "upc_reader", "code_39_reader", "codabar_reader", "i2of5_reader"]
            // Puoi includere diversi lettori per gestire una vasta gamma di tipi di codici a barre
        }
    }, function (err) {
        if (err) {
            console.error("Errore durante l'inizializzazione di Quagga:", err);
            return;
        }
        console.log("Inizializzazione di Quagga completata.");
        Quagga.start();
    });

    Quagga.onDetected(function (result) {
        alert('Codice a barre trovato: ' + result.codeResult.code);
        Quagga.stop();
    });
});
