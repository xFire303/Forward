<?php
include_once("../connection/dbConnection.php");
include_once("session.php");

$success = '';

// Verifica se i dati sono stati inviati tramite metodo POST
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Recupera i dati inviati dal modulo di registrazione
    $nome = $_POST["nome"];
    $cognome = $_POST["cognome"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Rende sicura la password utilizzando la funzione password_hash()
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Genera una data casuale e un numero di tessera casuale utilizzando le funzioni definite nel file 2
    $dataCasuale = generateRandomDate();
    $nTessera = generateRandomNumber();

    // Inserisce i dati dell'utente nel database
    $sqlUtente = "INSERT INTO utenti (nome, cognome, email, password, ruolo) VALUES ('$nome', '$cognome', '$email', '$password', 'user')";
    $sqlTessera = "INSERT INTO tessere (dataScadenza, nTessera, idUtente) VALUES ('$dataCasuale', '$nTessera', LAST_INSERT_ID())";

    // Esegue le query separatamente e verifica se hanno avuto successo
    if ($conn->query($sqlUtente) === TRUE && $conn->query($sqlTessera) === TRUE) {
        $success = "Registrazione avvenuta con successo!";
        header("Location: ../templates/login.php?success=" . urlencode($success));
        exit();
    } else {
        // Se c'è stato un errore durante l'inserimento dei dati nel database, mostra un messaggio di errore
        echo "Errore nella registrazione: " . $conn->error;
    }

    // Chiude la connessione al database
    $conn->close();
}
?>
