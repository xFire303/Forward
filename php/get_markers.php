<?php
// Connessione al database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forward";

// Creazione della connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

// Query per selezionare i marker dalla tabella markers
$sql = "SELECT idMarker, latitudine, longitudine FROM markers";
$result = $conn->query($sql);

// Array per memorizzare i dati dei marker
$markers = array();

// Estrazione dei dati dei marker e inserimento nell'array
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $markers[] = array(
            "idMarker" => $row["idMarker"],
            "latitudine" => $row["latitudine"],
            "longitudine" => $row["longitudine"]
        );
    }
}

// Chiusura della connessione al database
$conn->close();

// Conversione dell'array in formato JSON e stampa
echo json_encode($markers);
?>
