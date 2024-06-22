<?php
// fetchStations.php
// Allow CORS
header("Access-Control-Allow-Origin: *");

// Connect to MySQL database
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "delhi_metro"; // Your database name
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch all data from stationlist table
$sql = "SELECT * FROM stationlist";
$result = $conn->query($sql);

$stations = array();
if ($result->num_rows > 0) {
    // Fetch associative array
    while($row = $result->fetch_assoc()) {
        $stations[] = $row;
    }
} else {
    echo "0 results";
}

// Close connection
$conn->close();

// Return JSON response
header('Content-Type: application/json');
echo json_encode($stations);
?>
