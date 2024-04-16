<?php 
include_once("../components/head.php");
include_once("../components/navbar.php");
include_once("../php/session.php");
?>

<?php
if (!isSessionWithEmailActive()) {
    // Se la sessione non è attiva o manca l'email, reindirizza l'utente alla pagina di accesso
    $path = 'login.php';
    redirectToLogin($path);
}
?>

<i class="fa-solid fa-id-card" id="cartaIcon"></i>

<div id="map"></div>

<div id="contenitore-tessera"></div>

<div id="contenitore-tessereCasonetto"></div>


<?php include_once("../components/footer.php") ?>