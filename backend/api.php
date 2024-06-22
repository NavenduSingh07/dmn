<?php
// xampp/htdocs/delhi-metro-navigator/backend/api.php
require 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Example endpoint to get all stations
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['endpoint'] === 'stations') {
    $stmt = $pdo->query('SELECT * FROM stations');
    $stations = $stmt->fetchAll();
    echo json_encode($stations);
}

// Add other endpoints similarly...
?>
