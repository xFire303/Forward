<?php
// Connessione al database
$conn = new mysqli("localhost", "root", "", "forward");

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Query per ottenere i dati dei bidoni con il tipo di cassonetto corrispondente
$sql = "SELECT bidoni.*, tipologia.tipo AS tipo_cassonetto 
        FROM bidoni 
        INNER JOIN tipologia ON bidoni.idTipo = tipologia.id";
$result = $conn->query($sql);

// Array per memorizzare i dati dei bidoni
$bidoni = array();

if ($result->num_rows > 0) {
    // Estrazione dei dati e inserimento nell'array
    while($row = $result->fetch_assoc()) {
        // Mappa per associare l'idTipo al tipo di cassonetto
        $tipoCassonettoMap = array(
            1 => "cassonetto plastica",
            2 => "cassonetto carta",
            3 => "cassonetto vetro",
            4 => "cassonetto organico"
        );

        $bidone = array(
            "idBidone" => $row["idBidone"],
            "tipo_cassonetto" => $tipoCassonettoMap[$row["idTipo"]],
            "distanza" => $row["distanza"],
            "stato" => $row["stato"]
        );
        array_push($bidoni, $bidone);
    }
} else {
    echo "0 risultati";
}

// Conversione dell'array in formato JSON e invio della risposta
echo json_encode($bidoni);

// Chiusura della connessione
$conn->close();
?>