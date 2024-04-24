<?php
require_once("../php/session.php");
require_once("../components/head.php");
require_once("../components/navbar.php");

$successSegnalazione = '';

if (isset($_POST['invia_email'])) {
    if (!isset($_SESSION['email_inviata'])) { // Verifica se l'email è già stata inviata
        exec('python ../python/app.py');
        $successSegnalazione = "Email inviata con successo!";
        $_SESSION['email_inviata'] = true; // Imposta la variabile di sessione
    } else {
        $successSegnalazione = "L'email è già stata inviata.";
    }
}
?>
<div class="container-form-email"> 
    <h1>Invio Email</h1>
    <form action="" method="post" class="email-form">
        <textarea name="testo_email" placeholder="Inserisci il messaggio da inviare" rows="6"></textarea>
        <button type="submit" name="invia_email">Invia Email</button>
    </form>
</div>



<script src="../js/index.js"></script>

<?php

if (!empty($successSegnalazione)) {
    echo "<p>$successSegnalazione</p>";
}

include_once("../components/footer.php")
?>