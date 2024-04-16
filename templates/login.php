<?php include_once("../components/head.php") ?>
<?php include_once("../components/navbar.php") ?>

<?php
include_once("../connection/dbConnection.php");
include_once("../php/session.php");

// Verifica i dati del form
$errorEmail = "";
$errorPassword = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Utilizzo di statement preparati per prevenire SQL injection
    $stmt = $conn->prepare("SELECT idUtente, email, password FROM utenti WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Login effettuato con successo
            $_SESSION["user_id"] = $row['idUtente']; // Imposta l'ID utente nella sessione
            $_SESSION["email"] = $email; // Imposta l'email nella sessione
            header("Location: ../templates/index.php"); // Reindirizza dopo il login
            exit;
        } else {
            $errorPassword = "La password non è corretta";
        }
    } else {
       $errorEmail = "L'email non è corretta";
    }

    $stmt->close();
}

// Controlla se la variabile $success è presente nella query string dell'URL
$registration_success = '';
if (isset($_GET['success'])) {
    $registration_success = $_GET['success'];
}
?>

<section class="loginPage">
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">
        <div class="Registrazione">
            <form action="../php/register.php" method="post">
                <label for="chk" aria-hidden="true"> REGISTRAZIONE </label>
                <input type="text" name="nome" placeholder="Nome" required="">
                <input type="text" name="cognome" placeholder="Cognome" required="">
                <input type="email" name="email" placeholder="Email" required="">
                <input type="password" name="password" placeholder="Password" required="">
                <div class="success">
                    <?php echo htmlspecialchars($registration_success); ?>
                </div>
                <button class="btnRegistrati">REGISTRATI</button>
            </form>
        </div>
        <div class="login">
            <form action='login.php' method='post'>
                <label for="chk" aria-hidden="true">ACCESSO</label>
                <input type="email" name="email" placeholder="Email" required="">
                <input type="password" name="password" placeholder="Password" required="">
                <div class="errors">
                    <?php
                    if (isset($errorEmail)) {
                        echo $errorEmail;
                    }
                    if (isset($errorPassword)) {
                        echo $errorPassword;
                    }
                    ?>
                </div>
                <button class="btnAccesso">ACCEDI</button>
            </form>
        </div>
    </div>
</section>

<!-- componente footer -->
<?php include_once("../components/footer.php") ?>