<?php
// Variables
$url = 'articulos.json';
$id = $_GET['id'];
$existe = false;

// Extraer contenido de articulos.json
$contenido = file_get_contents($url);

$articulosCarrito = json_decode($contenido, true);


if (isset($articulosCarrito[$id])) {
    $articulosCarrito[$id]++;
} else {
    $articulosCarrito[$id] = 1;
}

file_put_contents($url, json_encode($articulosCarrito));
echo json_encode($articulosCarrito);
