<?php

//inizio la sessione
session_start();

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


function logout(){
    $_SESSION = [];
    
    $params = session_get_cookie_params();
    setcookie('PHPSESSID', '', time() - 3600, $params['path'],$params['domain'],
    $params['secure'],$params['httponly']);
    
    session_destroy();
    
    header('Location: login.php');
    exit;
}


?>