<?php
// Connessione al database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forward";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Query per ottenere i marker dal database
$sql = "SELECT latitudine, longitudine FROM markers";
$result = $conn->query($sql);

// Contatore per identificare i marker
$counter = 0;

// Output JavaScript per aggiungere i marker alla mappa
echo "<script>";

// Itera sui risultati della query
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $latitudine = $row["latitudine"];
        $longitudine = $row["longitudine"];
        
        // Genera il codice JavaScript per aggiungere il marker
        echo "let casso$counter = L.marker([$latitudine, $longitudine]).addTo(map);";
        echo "casso$counter.bindPopup('Marker $counter');"; // Esempio di popup
        echo "casso$counter.on('click', () => onMarkerClick('card-container-$counter'));"; // Aggiunge l'evento click
        $counter++;
    }
} else {
    echo "0 results";
}
echo "</script>";

// Chiude la connessione al database
$conn->close();
?>
