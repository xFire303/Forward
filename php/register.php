<?php
session_start();

include_once("../connection/dbConnection.php");
include_once("/session.php");
//prendiamo i dati inviati nel modulo
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nome = $_POST["nome"];
    $cognome = $_POST["cognome"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    //verifico se e registrato come utente o meno
   /*  if($_SESSION["ruolo"] == 'aziendale'){
        $ruolo = "aziendale";
    }else{
        $ruolo = "cliente";
    }
 */
    //rendo sicura la password
    $password = password_hash($password, PASSWORD_DEFAULT);

    //inserisco i dati
    $sql = "INSERT INTO utenti (idUtente, nome, cognome, email, password) VALUES (NULL, '$nome', '$cognome', '$email', '$password');";

    if ($conn->query($sql) === TRUE) {
        echo "Registrazione avvenuta con successo!";
        header("Location:login.php");
        exit();
    } else {
        echo "Errore nella registrazione: " . $conn->error;
    }

    $conn -> close();
    
    //reindirizzo alla login page
    
}

?>