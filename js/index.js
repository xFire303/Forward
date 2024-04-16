// hamburger menu
const containerNav = document.querySelector('.linkContainer');
const linkNav = document.querySelectorAll(".link");
const hamburger = document.getElementById('hamburger');

//show menu
hamburger.addEventListener('click',()=>{

containerNav.classList.toggle('showMenu');
hamburger.classList.toggle('open');
})
//chiude il menu ogni volta che clicco un link
linkNav.forEach((link)=>{
    link.addEventListener("click",()=>{
        containerNav.classList.toggle("showMenu");
        hamburger.classList.toggle('open');
    })
})



//scanner js
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