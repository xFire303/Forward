<?php include_once("../php/session.php"); ?>

<nav>
    <div class="hamburger" id="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>

    <div class="linkContainer">
        <?php if(!isSessionWithEmailActive()): ?>
            <ul class="navLinks">
                <a href="../templates/login.php" class="link"><li>Registrazione</li></a>
                <a href="../templates/login.php" class="link"><li>Login</li></a>
            </ul>
        <?php else: ?>
            <ul class="navLinks">
                <a href="../templates/index.php" class="link"><li>Mappa</li></a>
                <a href="../templates/profilo.php" class="link"><li>Profilo personale</li></a>
                <a href="../templates/scanner.php" class="link"><li>Scansiona rifiuto</li></a>
                <a href="../pages/informazioni.php" class="link"><li>Informazioni</li></a>
                <a href="../templates/segnalazioni.php" class="link"><li>Segnalazioni</li></a>
                <a class="link" id="btnLightMap"><li>Light Map</li></a>
                <a class="link" id="btnDarkMap"><li>Dark Map</li></a>
                <a href="../php/logout.php" class="link"><li>Logout</li></a>
            </ul>
        <?php endif; ?>
    </div>
</nav>
