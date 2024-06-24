<?php
// DelhiMetro.php

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

class DelhiMetro {
    private $graph = [];
    private $stations = [];
    private $lines = [];

    public function addConnection($station1, $station2, $line) {
        $this->graph[$station1][] = $station2;
        $this->graph[$station2][] = $station1;
        $this->stations[$station1] = true;
        $this->stations[$station2] = true;
        $this->lines[$station1][$station2] = $line;
        $this->lines[$station2][$station1] = $line;
    }

    public function dijkstra($start, $end) {
        $distances = array_fill_keys(array_keys($this->stations), PHP_INT_MAX);
        $distances[$start] = 0;
        $previous = array_fill_keys(array_keys($this->stations), null);
        $pq = new SplPriorityQueue();
        $pq->insert($start, 0);

        while (!$pq->isEmpty()) {
            $currentStation = $pq->extract();

            if ($currentStation === $end) {
                $path = [];
                $interchanges = 0;
                $currentLine = null;

                while ($currentStation !== null) {
                    array_unshift($path, $currentStation);

                    if ($previous[$currentStation] !== null) {
                        $line = $this->getLine($currentStation, $previous[$currentStation]);
                        if ($currentLine !== null && $line !== $currentLine) {
                            $interchanges++;
                        }
                        $currentLine = $line;
                    }

                    $currentStation = $previous[$currentStation];
                }

                return [$path, $distances[$end], $interchanges];
            }

            if (!isset($this->graph[$currentStation])) {
                continue;
            }

            foreach ($this->graph[$currentStation] as $neighbor) {
                $distance = $distances[$currentStation] + 1;
                if ($distance < $distances[$neighbor]) {
                    $distances[$neighbor] = $distance;
                    $previous[$neighbor] = $currentStation;
                    $pq->insert($neighbor, -$distance);
                }
            }
        }

        return [null, PHP_INT_MAX, 0];
    }

    public function getLine($station1, $station2) {
        return $this->lines[$station1][$station2];
    }

    public function getLineInfo($station) {
        return $this->lines[$station];
    }
}

// Initialize and set up the Delhi Metro system
$metro = new DelhiMetro();

// Add connections (this is a simplified version, you'd need to add all connections with line information)
$connections = [
    // Yellow Line
    ["Samaypur Badli", "Rohini Sector 18", "Yellow"],
    ["Rohini Sector 18", "Badli Mor", "Yellow"],
    ["Badli Mor", "Jahangirpuri", "Yellow"],
    ["Jahangirpuri", "Adarsh Nagar", "Yellow"],
    ["Adarsh Nagar", "Azadpur", "Yellow"],
    ["Azadpur", "Model Town", "Yellow"],
    ["Model Town", "G.T.B. Nagar", "Yellow"],
    ["G.T.B. Nagar", "Vishwa Vidyalaya", "Yellow"],
    ["Vishwa Vidyalaya", "Vidhan Sabha", "Yellow"],
    ["Vidhan Sabha", "Civil Lines", "Yellow"],
    ["Civil Lines", "Kashmere Gate", "Yellow"],
    ["Kashmere Gate", "Chandni Chowk", "Yellow"],
    ["Chandni Chowk", "Chawri Bazar", "Yellow"],
    ["Chawri Bazar", "New Delhi", "Yellow"],
    ["Rajiv Chowk", "Patel Chowk", "Yellow"],
    ["Patel Chowk", "Central Secretariat", "Yellow"],
    ["Central Secretariat", "Udyog Bhawan", "Yellow"],
    ["Udyog Bhawan", "Lok Kalyan Marg", "Yellow"],
    ["Lok Kalyan Marg", "Jor Bagh", "Yellow"],
    ["Jor Bagh", "INA", "Yellow"],
    ["INA", "AIIMS", "Yellow"],

    // Blue Line
    ["Dwarka Sector 21", "Dwarka Sector 8", "Blue"],
    ["Dwarka Sector 8", "Dwarka Sector 9", "Blue"],
    ["Dwarka Sector 9", "Dwarka Sector 10", "Blue"],
    ["Dwarka Sector 10", "Dwarka Sector 11", "Blue"],
    ["Dwarka Sector 11", "Dwarka Sector 12", "Blue"],
    ["Dwarka Sector 12", "Dwarka Sector 13", "Blue"],
    ["Dwarka Sector 13", "Dwarka Sector 14", "Blue"],
    ["Dwarka Sector 14", "Dwarka", "Blue"],
    ["Dwarka", "Nawada", "Blue"],
    ["Nawada", "Uttam Nagar West", "Blue"],
    ["Uttam Nagar West", "Uttam Nagar East", "Blue"],
    ["Uttam Nagar East", "Janakpuri West", "Blue"],
    ["Janakpuri West", "Janakpuri East", "Blue"],
    ["Janakpuri East", "Tilak Nagar", "Blue"],
    ["Tilak Nagar", "Subhash Nagar", "Blue"],
    ["Subhash Nagar", "Tagore Garden", "Blue"],
    ["Tagore Garden", "Rajouri Garden", "Blue"],
    ["Rajouri Garden", "Ramesh Nagar", "Blue"],
    ["Ramesh Nagar", "Moti Nagar", "Blue"],
    ["Moti Nagar", "Kirti Nagar", "Blue"],
    ["Kirti Nagar", "Shadipur", "Blue"],
    ["Shadipur", "Patel Nagar", "Blue"],
    ["Patel Nagar", "Rajendra Place", "Blue"],
    ["Rajendra Place", "Karol Bagh", "Blue"],
    ["Karol Bagh", "Jhandewalan", "Blue"],
    ["Jhandewalan", "R K Ashram Marg", "Blue"],
    ["R K Ashram Marg", "Rajiv Chowk", "Blue"],
    ["Rajiv Chowk", "Barakhamba Road", "Blue"],
    ["Barakhamba Road", "Mandi House", "Blue"],
    ["Mandi House", "Supreme Court", "Blue"],
    ["Supreme Court", "Indraprastha", "Blue"],
    ["Indraprastha", "Yamuna Bank", "Blue"],

    // Red Line
    ["Rithala", "Rohini West", "Red"],
    ["Rohini West", "Rohini East", "Red"],
    ["Rohini East", "Pitampura", "Red"],
    ["Pitampura", "Kohat Enclave", "Red"],
    ["Kohat Enclave", "Netaji Subhash Place", "Red"],
    ["Netaji Subhash Place", "Keshav Puram", "Red"],
    ["Keshav Puram", "Kanhaiya Nagar", "Red"],
    ["Kanhaiya Nagar", "Inderlok", "Red"],
    ["Inderlok", "Shastri Nagar", "Red"],
    ["Shastri Nagar", "Pratap Nagar", "Red"],
    ["Pratap Nagar", "Pul Bangash", "Red"],
    ["Pul Bangash", "Tis Hazari", "Red"],
    ["Tis Hazari", "Kashmere Gate", "Red"],
    ["Kashmere Gate", "Shastri Park", "Red"],
    ["Shastri Park", "Seelampur", "Red"],
    ["Seelampur", "Welcome", "Red"],
    ["Welcome", "Shahdara", "Red"],
    ["Shahdara", "Mansarovar Park", "Red"],
    ["Mansarovar Park", "Jhilmil", "Red"],
    ["Jhilmil", "Dilshad Garden", "Red"],

    // Green Line
    ["Brigadier Hoshiar Singh", "Bahadurgarh City", "Green"],
    ["Bahadurgarh City", "Bus Stand", "Green"],
    ["Bus Stand", "Modern Industrial Estate", "Green"],
    ["Modern Industrial Estate", "IAS Colony", "Green"],
    ["IAS Colony", "Udyog Nagar", "Green"],
    ["Udyog Nagar", "Peeragarhi", "Green"],
    ["Peeragarhi", "Paschim Vihar West", "Green"],
    ["Paschim Vihar West", "Paschim Vihar East", "Green"],
    ["Paschim Vihar East", "Madipur", "Green"],
    ["Madipur", "Shivaji Park", "Green"],
    ["Shivaji Park", "Punjabi Bagh", "Green"],
    ["Punjabi Bagh", "Ashok Park Main", "Green"],

    // Violet Line
    ["Kashmere Gate", "Lal Quila", "Violet"],
    ["Lal Quila", "Jama Masjid", "Violet"],
    ["Jama Masjid", "Delhi Gate", "Violet"],
    ["Delhi Gate", "ITO", "Violet"],
    ["ITO", "Mandi House", "Violet"],
    ["Mandi House", "Janpath", "Violet"],
    ["Janpath", "Central Secretariat", "Violet"],
    ["Central Secretariat", "Khan Market", "Violet"],
    ["Khan Market", "Jawaharlal Nehru Stadium", "Violet"],
    ["Jawaharlal Nehru Stadium", "Jangpura", "Violet"],
    ["Jangpura", "Lajpat Nagar", "Violet"],
    ["Lajpat Nagar", "Moolchand", "Violet"],
    ["Moolchand", "Kailash Colony", "Violet"],
    ["Kailash Colony", "Nehru Place", "Violet"],
    ["Nehru Place", "Kalkaji Mandir", "Violet"],
    ["Kalkaji Mandir", "Govind Puri", "Violet"],
    ["Govind Puri", "Harkesh Nagar", "Violet"],
    ["Harkesh Nagar", "Jasola Apollo", "Violet"],
    ["Jasola Apollo", "Sarita Vihar", "Violet"],
    ["Sarita Vihar", "Mohan Estate", "Violet"],
    ["Mohan Estate", "Tughlakabad", "Violet"],

    // Pink Line (partial)
    ["Majlis Park", "Azadpur", "Pink"],
    ["Azadpur", "Shalimar Bagh", "Pink"],
    ["Shalimar Bagh", "Netaji Subhash Place", "Pink"],

    // Magenta Line (partial)
    ["Janakpuri West", "Terminal 1 IGI Airport", "Magenta"],
    ["Terminal 1 IGI Airport", "Sadar Bazar", "Magenta"],
    ["Sadar Bazar", "Palam", "Magenta"],

    // Interchanges
    ["Rajiv Chowk", "New Delhi", "Yellow"],
    ["Rajiv Chowk", "R K Ashram Marg", "Blue"],
    ["Kashmere Gate", "Chandni Chowk", "Yellow"],
    ["Kashmere Gate", "Tis Hazari", "Red"],
    ["Kashmere Gate", "Lal Quila", "Violet"],
    ["Central Secretariat", "Udyog Bhawan", "Yellow"],
    ["Central Secretariat", "Khan Market", "Violet"],
    ["Mandi House", "Supreme Court", "Blue"],
    ["Mandi House", "Janpath", "Violet"],
    ["Inderlok", "Kanhaiya Nagar", "Red"],
    ["Inderlok", "Ashok Park Main", "Green"],
    ["Kirti Nagar", "Shadipur", "Blue"],
    ["Yamuna Bank", "Indraprastha", "Blue"],
    ["New Delhi", "Chawri Bazar", "Yellow"],
    ["Azadpur", "Model Town", "Yellow"],
    ["Azadpur", "Shalimar Bagh", "Pink"],
    ["Netaji Subhash Place", "Keshav Puram", "Red"],
    ["Netaji Subhash Place", "Shalimar Bagh", "Pink"],
    ["Janakpuri West", "Uttam Nagar East", "Blue"],
    ["Janakpuri West", "Terminal 1 IGI Airport", "Magenta"]
];

foreach ($connections as $connection) {
    list($station1, $station2, $line) = $connection;
    $metro->addConnection($station1, $station2, $line);
}

if (isset($_GET['start']) && isset($_GET['end'])) {
    $start = $_GET['start'];
    $end = $_GET['end'];
    list($path, $numStops, $interchanges) = $metro->dijkstra($start, $end);

    if ($path === null) {
        $response = ["error" => "No route found."];
    } else {
        $lineInfo = [];
        for ($i = 0; $i < count($path) - 1; $i++) {
            $station = $path[$i];
            $nextStation = $path[$i + 1];
            $line = $metro->getLine($station, $nextStation); // Using public method now
            $lineInfo[] = [
                "station" => $station,
                "line" => $line,
                "nextStation" => $nextStation
            ];
        }

        $response = [
            "path" => $path,
            "total_stations" => $numStops,
            "interchanges" => $interchanges,
            "line_info" => $lineInfo
        ];
    }

    echo json_encode($response);
} else {
    echo json_encode(["error" => "Invalid parameters."]);
}
?>
