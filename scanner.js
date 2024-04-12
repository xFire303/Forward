

// Scanner
 

const video = document.getElementById('video');
const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');
let scannerActive = false;
let scannerInterval;

toggleButton.addEventListener('click', function() {
  scannerActive = !scannerActive;

  if (scannerActive) {
    startScanner();
    toggleButton.textContent = "Spegni Scanner";
    statusText.textContent = "Scanner acceso";
  } else {
    stopScanner();
    toggleButton.textContent = "Accendi Scanner";
    statusText.textContent = "Scanner spento";
  }
});

function startScanner() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

  video.addEventListener('loadedmetadata', function() {
    scannerInterval = setInterval(scanQR, 1000);
  });
}

function stopScanner() {
  clearInterval(scannerInterval);
  const stream = video.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
}

function scanQR() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, canvas.width, canvas.height);

  if (code) {
    alert('QR Code trovato: ' + code.data);
   
  }
}