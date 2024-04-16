<?php

function generateRandomDate() {
    // Ottieni l'anno corrente
    $currentYear = date("Y");
    
    // Ottieni l'anno esattamente 10 anni in avanti rispetto all'anno corrente
    $randomYear = $currentYear + 10;
    
    // Genera un mese casuale tra 1 e 12
    $randomMonth = str_pad(rand(1, 12), 2, "0", STR_PAD_LEFT);
    
    // Genera un giorno casuale tra 1 e 28 (considerando che febbraio ha al massimo 28 giorni)
    $randomDay = str_pad(rand(1, 28), 2, "0", STR_PAD_LEFT);
    
    // Concatena tutto nel formato richiesto per MySQL (YYYY-MM-DD)
    $randomDate = $randomYear . '-' . $randomMonth . '-' . $randomDay;
    
    return $randomDate;
}

function generateRandomNumber() {
    // Genera un numero casuale di 8 cifre
    $randomNumber = '';
    for ($i = 0; $i < 8; $i++) {
        $randomNumber .= mt_rand(0, 9);
    }
    
    return $randomNumber;
}

function isSessionWithEmailActive() {
    // Restituisce true se la variabile di sessione "email" esiste e non è vuota, altrimenti restituisce false
    return isset($_SESSION["email"]) && !empty($_SESSION["email"]);
}

// Funzione per reindirizzare l'utente alla pagina di accesso
function redirectToLogin($path) {
    header("Location: $path");
    exit;
}
