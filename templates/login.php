<?php


include_once("../connection/dbConnection.php");
include_once("../php/session.php");
include_once("../php/register.php");


//verifico se l'utente è gia loggato
if($logged_in){
    header('Location: index.php');
    exit;
}


/* verifichiam i dati del form */
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST["email"];
    $password = $_POST["password"];

    //otteniamo i dati dal db per confrontarli, anche ruolo e password hashata
    $sql= "SELECT email, password, ruolo FROM utenti WHERE email = '$email';";
    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "Login effettuato con successo!";
            header("Location:index.php");
            // Puoi effettuare il redirect o impostare le sessioni qui
        } else {
            echo "Password errata";
        }
    } else {
        echo "Utente non trovato";
    }
    
    $conn->close();
}
?>

<!-- inseriamo i vari compinenti -->
<?php include_once("../components/head.php") ?>
<?php include_once("../components/navbar.php") ?>


<section class="loginPage">
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">
            <div class="Registrazione">
                <form>
                    <label for="chk" aria-hidden="true"> REGISTRAZIONE </label>
                    <input type="text" name="txt" placeholder="Username" required="">
                    <input type="email" name="email" placeholder="Email" required="">
                    <input type="password" name="pswd" placeholder="Password" required="">
                    <button class="btnRegistrati">REGISTRATI</button>
                </form>
            </div>
            <div class="login">
                <form>
                    <label for="chk" aria-hidden="true">ACCESSO</label>
                    <input type="email" name="email" placeholder="Email" required="">
                    <input type="password" name="password" placeholder="Password" required="">
                    <button class="btnAccesso">ACCEDI</button>
                </form>
            </div>
        </div>  
    </section>



<!-- componente footer -->
<?php include_once("../components/footer.php") ?>
