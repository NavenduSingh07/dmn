<?php
// DelhiMetro.php initialization and connectionss array

// Autocomplete script

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Array of connectionss
$connectionss = [
    // All connectionss as defined earlier in the $connectionss array...
];

// Retrieve search query
if (isset($_GET['query'])) {
    $query = strtolower($_GET['query']);
    $matches = [];

    // Find connectionss matching the query
    foreach ($connectionss as $station) {
        if (stripos($station, $query) !== false) {
            $matches[] = $station;
        }
    }

    // Return matches as JSON
    header('Content-Type: application/json');
    echo json_encode($matches);
} else {
    echo json_encode([]);
}
?>
