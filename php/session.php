<?php

//inizio la sessione
session_start();
include 'functions.php';

//verifico se è loggato o no
$logged_in = $_SESSION['logged_in'] ?? false;


//controlliamo se l'utente ha fatto il login
function require_login($logged_in){
    if($logged_in == false){
        //reindirizzo alla login se non ha fatto la login
        header('Location: login.php');
        exit;
    }
}
?>