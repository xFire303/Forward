<?php
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

// Esegui query per ottenere i dati dalla tabella
$sql = "SELECT nome, cognome, tessere.nTessera FROM utenti INNER JOIN tessere ON tessere.idTessera = utenti.idTessera";
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
