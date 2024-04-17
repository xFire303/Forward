<?php
$successSegnalazione = '';
if (isset($_POST['invia_email'])) {
    exec('python ../python/app.py');
    $successSegnalazione = "Email inviata con successo!";
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>segnalazioni</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <nav>
        <div class="hamburger" id="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

        <div class="linkContainer">
            <ul class="navLinks">
                <a href="index.php" class="link">
                    <li>Mappa</li>
                </a>
                <a href="profilo.php" class="link">
                    <li>Profilo personale</li>
                </a>
                <a href="scanner.php" class="link">
                    <li>Scansiona rifiuto</li>
                </a>
                <a href="../pages/informazioni.html" class="link">
                    <li>Informazioni</li>
                </a>
            </ul>
        </div>
    </nav>

    <h1>Invio Email</h1>
    <form action="" method="post">
        <button type="submit" name="invia_email">Invia Email</button>
    </form>

    <script src="../js/index.js"></script>

    <?php
    if (!empty($successSegnalazione)) {
        echo "<p>$successSegnalazione</p>";
    }
    ?>

</body>

</html>