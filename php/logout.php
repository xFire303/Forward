<?php
include_once("session.php");

$_SESSION = [];

$params = session_get_cookie_params();
setcookie(
    'PHPSESSID',
    '',
    time() - 3600,
    $params['path'],
    $params['domain'],
    $params['secure'],
    $params['httponly']
);

session_destroy();

$path = '../templates/login.php';

redirectToLogin($path);

exit;
