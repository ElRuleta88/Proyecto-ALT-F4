<?php
require_once 'config.php';

$db = new mysqli(host,user,pass,nombre);

if ($db->connect_error) {
    die("Error: " . $db->connect_error);
    }
?>