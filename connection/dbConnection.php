<?php

$db = "forward";
$db_host = "localhost";
$user = "root";
$password = "";
$conn = mysqli_connect($db_host,$user,$password);
if(!$conn){
    echo "Si è verificato un problema";
    exit;
}
mysqli_select_db($conn,$db);


?>