<?php include_once("../components/head.php") ?>

<!-- componente navbar -->
<?php include_once("../components/navbar.php") ?>

<section class="dashboard">
    <div class="containerUser">

        <!-- container con data e svg -->
        <div class="container_data">
            <div class="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
            </div>
            <div class="dataUser">
                <h3 id="userName"></h3>
                <h3 id="userSurname"></h3>
            </div>
        </div>

         <div class="city_Data">
            <h3>Città</h3>
            <p>Verona</p>
         </div>

        <!-- container email e Ntessera -->
        <div class="container_data2">
          
            <div class="emailData">
                <h3 id="userEmail"></h3>
            </div>


            <div class="container_data3">
                <div class="emailData">
                    <h3>Email</h3>
                </div>
               
            <div class="N_tessera">
                <h3>N° tessera</h3>
                <p id="userNtessera"></p>
            </div>
        </div>

        <div class="change_password">
            <a href="">Cambia password</a>
        </div>
    </div>
</section>

<!-- componente footer -->
<?php include_once("../components/footer.php") ?>

<script>
    // Utilizza AJAX per ottenere i dati dall'endpoint getUserData.php
    // e popola dinamicamente gli elementi HTML con i dati ottenuti
    // quando la pagina è completamente caricata
    document.addEventListener("DOMContentLoaded", function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var userData = JSON.parse(xhr.responseText);
                    if (userData.length > 0) {
                        document.getElementById("userName").textContent = userData[0].nome;
                        document.getElementById("userSurname").textContent = userData[0].cognome;
                        document.getElementById("userEmail").textContent = userData[0].email;
                        document.getElementById("userNtessera").textContent = userData[0].nTessera;
                        // Aggiungi altri campi se necessario
                    }
                } else {
                    console.error("Si è verificato un errore durante il recupero dei dati.");
                }
            }
        };
        xhr.open("GET", "../php/getUserData.php", true);
        xhr.send();
    });
</script>
