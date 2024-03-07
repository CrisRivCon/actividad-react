<?php
// Variables
$url = 'articulos.json';
header("Access-Control-Allow-Origin: *");


// Extraer contenido de articulos.json
$contenido = file_get_contents($url);

$articulosCarrito = json_decode($contenido, true);

echo json_encode($articulosCarrito);
