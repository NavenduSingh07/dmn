<?php
class DelhiMetro {
    private $graph = [];
    private $stations = [];
    private $lines = []; // Array to store lines for each station

    public function addConnection($station1, $station2, $line) {
        $this->graph[$station1][] = [$station2, $line];
        $this->graph[$station2][] = [$station1, $line];
        $this->stations[$station1] = true;
        $this->stations[$station2] = true;

        if (!isset($this->lines[$station1])) {
            $this->lines[$station1] = [];
        }
        if (!isset($this->lines[$station2])) {
            $this->lines[$station2] = [];
        }
        if (!in_array($line, $this->lines[$station1])) {
            $this->lines[$station1][] = $line;
        }
        if (!in_array($line, $this->lines[$station2])) {
            $this->lines[$station2][] = $line;
        }
    }

    public function dijkstra($start, $end) {
        $distances = array_fill_keys(array_keys($this->stations), PHP_INT_MAX);
        $distances[$start] = 0;
        $previous = array_fill_keys(array_keys($this->stations), null);
        $prevLine = array_fill_keys(array_keys($this->stations), null);
        $pq = new SplPriorityQueue();
        $pq->insert([$start, null], 0); // [station, previous line]

        while (!$pq->isEmpty()) {
            [$currentStation, $prevLine] = $pq->extract();
            
            if ($currentStation === $end) {
                $path = [];
                $lineChanges = 0;
                while ($currentStation !== null) {
                    array_unshift($path, $currentStation);
                    $currentStation = $previous[$currentStation];
                }
                if (count($path) > 1) {
                    $lineChanges = $this->calculateLineChanges($path);
                }
                return [$path, count($path) - 1, $lineChanges];
            }

            if (!isset($this->graph[$currentStation])) {
                continue;
            }

            foreach ($this->graph[$currentStation] as [$neighbor, $line]) {
                $distance = $distances[$currentStation] + 1;
                if ($distance < $distances[$neighbor]) {
                    $distances[$neighbor] = $distance;
                    $previous[$neighbor] = $currentStation;
                    $prevLine[$neighbor] = $line;
                    $pq->insert([$neighbor, $line], -$distance);
                }
            }
        }

        return [null, PHP_INT_MAX, PHP_INT_MAX];
    }

    private function calculateLineChanges($path) {
        $lineChanges = 0;
        $previousLine = null;
        foreach ($path as $station) {
            $currentLines = $this->lines[$station];
            if ($previousLine !== null && !in_array($previousLine, $currentLines)) {
                $lineChanges++;
            }
            $previousLine = $currentLines[0]; // Assuming each station belongs to at least one line
        }
        return $lineChanges;
    }
}

// Initialize and set up the Delhi Metro system
$metro = new DelhiMetro();

// Add connections with lines (this is a simplified version, you'd need to add all connections)
$connections = [
    // Yellow Line
    ["Samaypur Badli", "Rohini Sector 18", "Yellow"],
    ["Rohini Sector 18", "Badli Mor", "Yellow"],
    // Add other lines similarly...
    // Red Line
    ["Rithala", "Rohini West", "Red"],
    // Add other lines similarly...
    // Green Line
    ["Brigadier Hoshiar Singh", "Bahadurgarh City", "Green"],
    // Add other lines similarly...
    // Violet Line
    ["Kashmere Gate", "Lal Quila", "Violet"],
    // Add other lines similarly...
    // Pink Line
    ["Majlis Park", "Azadpur", "Pink"],
    // Add other lines similarly...
    // Magenta Line
    ["Janakpuri West", "Dabri Mor", "Magenta"],
    // Add other lines similarly...
];

foreach ($connections as $connection) {
    $metro->addConnection($connection[0], $connection[1], $connection[2]);
}

// API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['start']) && isset($_GET['end'])) {
    $start = $_GET['start'];
    $end = $_GET['end'];

    list($path, $numStops, $lineChanges) = $metro->dijkstra($start, $end);

    header('Content-Type: application/json');
    echo json_encode([
        'path' => $path,
        'numStops' => $numStops,
        'lineChanges' => $lineChanges
    ]);
} else {
    // Handle invalid requests
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request. Please provide start and end parameters.']);
}
?>