<?php
// Avvia la sessione per accedere alla variabile $_SESSION
session_start();

// Verifica se l'utente è loggato
if (!isset($_SESSION["email"])) {
    // Utente non loggato, restituisci un messaggio di errore o reindirizza
    die("Utente non autorizzato");
}

// Connessione al database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forward";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Ottieni l'email dell'utente dalla sessione
$email = $_SESSION["email"];

// Esegui query per ottenere i dati della tessera dell'utente loggato
$sql = "SELECT utenti.nome, utenti.cognome, nTessera FROM tessere INNER JOIN utenti ON tessere.idUtente = utenti.idUtente WHERE utenti.email = '$email'";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Chiudi connessione al database
$conn->close();

// Restituisci i dati come JSON
echo json_encode($data);
?>
