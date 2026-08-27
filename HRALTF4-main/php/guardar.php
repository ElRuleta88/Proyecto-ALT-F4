<?php
require_once 'conexion.php';

$nombre = $_POST['nombre'];

$sql = "INSERT INTO documentos(nombre) VALUES ($nombre)";

if($db->query($sql)){
    echo "carga exitosa";
}else{
    echo "no cargo";
}
?>