<?php
// DelhiMetro.php

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

    public function addConnection($station1, $station2) {
        $this->graph[$station1][] = $station2;
        $this->graph[$station2][] = $station1;
        $this->stations[$station1] = true;
        $this->stations[$station2] = true;
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
                while ($currentStation !== null) {
                    array_unshift($path, $currentStation);
                    $currentStation = $previous[$currentStation];
                }
                return [$path, $distances[$end]];
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

        return [null, PHP_INT_MAX];
    }
}

// Initialize and set up the Delhi Metro system
$metro = new DelhiMetro();

// Add connections (this is a simplified version, you'd need to add all connections)
$connections = [
    // Yellow Line
    ["Samaypur Badli", "Rohini Sector 18"],
    ["Rohini Sector 18", "Badli Mor"],
    ["Badli Mor", "Jahangirpuri"],
    ["Jahangirpuri", "Adarsh Nagar"],
    ["Adarsh Nagar", "Azadpur"],
    ["Azadpur", "Model Town"],
    ["Model Town", "G.T.B. Nagar"],
    ["G.T.B. Nagar", "Vishwa Vidyalaya"],
    ["Vishwa Vidyalaya", "Vidhan Sabha"],
    ["Vidhan Sabha", "Civil Lines"],
    ["Civil Lines", "Kashmere Gate"],
    ["Kashmere Gate", "Chandni Chowk"],
    ["Chandni Chowk", "Chawri Bazar"],
    ["Chawri Bazar", "New Delhi"],
    ["New Delhi", "Rajiv Chowk"],
    ["Rajiv Chowk", "Patel Chowk"],
    ["Patel Chowk", "Central Secretariat"],
    ["Central Secretariat", "Udyog Bhawan"],
    ["Udyog Bhawan", "Race Course"],
    ["Race Course", "Jor Bagh"],
    ["Jor Bagh", "INA"],
    ["INA", "AIIMS"],
    ["AIIMS", "Green Park"],
    ["Green Park", "Hauz Khas"],
    ["Hauz Khas", "Malviya Nagar"],
    ["Malviya Nagar", "Saket"],
    ["Saket", "Qutab Minar"],
    ["Qutab Minar", "Chhattarpur"],
    ["Chhattarpur", "Sultanpur"],
    ["Sultanpur", "Ghitorni"],
    ["Ghitorni", "Arjan Garh"],
    ["Arjan Garh", "Guru Dronacharya"],
    ["Guru Dronacharya", "Sikanderpur"],
    ["Sikanderpur", "MG Road"],
    ["MG Road", "IFFCO Chowk"],
    ["IFFCO Chowk", "HUDA City Centre"],
["Dwarka Sector 21", "Dwarka Sector 8"],
["Dwarka Sector 8", "Dwarka Sector 9"],
["Dwarka Sector 9", "Dwarka Sector 10"],
["Dwarka Sector 10", "Dwarka Sector 11"],
["Dwarka Sector 11", "Dwarka Sector 12"],
["Dwarka Sector 12", "Dwarka Sector 13"],
["Dwarka Sector 13", "Dwarka Sector 14"],
["Dwarka Sector 14", "Dwarka"],
["Dwarka", "Dwarka Mor"],
["Dwarka Mor", "Nawada"],
["Nawada", "Uttam Nagar West"],
["Uttam Nagar West", "Uttam Nagar East"],
["Uttam Nagar East", "Janakpuri West"],
["Janakpuri West", "Janakpuri East"],
["Janakpuri East", "Tilak Nagar"],
["Tilak Nagar", "Subhash Nagar"],
["Subhash Nagar", "Tagore Garden"],
["Tagore Garden", "Rajouri Garden"],
["Rajouri Garden", "Ramesh Nagar"],
["Ramesh Nagar", "Moti Nagar"],
["Moti Nagar", "Kirti Nagar"],
["Kirti Nagar", "Shadipur"],
["Shadipur", "Patel Nagar"],
["Patel Nagar", "Rajendra Place"],
["Rajendra Place", "Karol Bagh"],
["Karol Bagh", "Jhandewalan"],
["Jhandewalan", "R.K. Ashram Marg"],
["R.K. Ashram Marg", "Rajiv Chowk"],
["Rajiv Chowk", "Barakhamba Road"],
["Barakhamba Road", "Mandi House"],
["Mandi House", "Supreme Court"],
["Supreme Court", "Indraprastha"],
["Indraprastha", "Yamuna Bank"],
["Yamuna Bank", "Laxmi Nagar"],
["Laxmi Nagar", "Nirman Vihar"],
["Nirman Vihar", "Preet Vihar"],
["Preet Vihar", "Karkarduma"],
["Karkarduma", "Anand Vihar"],
["Anand Vihar", "Kaushambi"],
["Kaushambi", "Vaishali"],
["Yamuna Bank", "Akshardham"],
["Akshardham", "Mayur Vihar-I"],
["Mayur Vihar-I", "Mayur Vihar Extension"],
["Mayur Vihar Extension", "New Ashok Nagar"],
["New Ashok Nagar", "Noida Sector 15"],
["Noida Sector 15", "Noida Sector 16"],
["Noida Sector 16", "Noida Sector 18"],
["Noida Sector 18", "Botanical Garden"],
["Botanical Garden", "Golf Course"],
["Golf Course", "Noida City Centre"],
["Noida City Centre", "Noida Sector 34"],
["Noida Sector 34", "Noida Sector 52"],
["Noida Sector 52", "Noida Sector 61"],
["Noida Sector 61", "Noida Sector 59"],
["Noida Sector 59", "Noida Sector 62"],
["Noida Sector 62", "Noida Electronic City"],

// Red Line
["Rithala", "Rohini West"],
["Rohini West", "Rohini East"],
["Rohini East", "Pitampura"],
["Pitampura", "Kohat Enclave"],
["Kohat Enclave", "Netaji Subhash Place"],
["Netaji Subhash Place", "Keshav Puram"],
["Keshav Puram", "Kanhaiya Nagar"],
["Kanhaiya Nagar", "Inderlok"],
["Inderlok", "Shastri Nagar"],
["Shastri Nagar", "Pratap Nagar"],
["Pratap Nagar", "Pulbangash"],
["Pulbangash", "Tis Hazari"],
["Tis Hazari", "Kashmere Gate"],
["Kashmere Gate", "Shastri Park"],
["Shastri Park", "Seelampur"],
["Seelampur", "Welcome"],
["Welcome", "Shahdara"],
["Shahdara", "Mansarovar Park"],
["Mansarovar Park", "Jhilmil"],
["Jhilmil", "Dilshad Garden"],
["Dilshad Garden", "Jharoda Kalan"],
["Jharoda Kalan", "Nand Nagri"],
["Nand Nagri", "Shyam Park"],
["Shyam Park", "Raj Bagh"],
["Raj Bagh", "Major Mohit Sharma Rajendra Nagar"],
["Major Mohit Sharma Rajendra Nagar", "Mohan Nagar"],
["Mohan Nagar", "Arthala"],
["Arthala", "Hindon River"],
["Hindon River", "Shaheed Sthal (New Bus Adda)"],

// Green Line
["Brigadier Hoshiar Singh", "Bahadurgarh City"],
["Bahadurgarh City", "Pandit Shree Ram Sharma"],
["Pandit Shree Ram Sharma", "Tikri Border"],
["Tikri Border", "Tikri Kalan"],
["Tikri Kalan", "Ghevra"],
["Ghevra", "Mundka Industrial Area"],
["Mundka Industrial Area", "Mundka"],
["Mundka", "Rajdhani Park"],
["Rajdhani Park", "Nangloi Railway Station"],
["Nangloi Railway Station", "Nangloi"],
["Nangloi", "Surajmal Stadium"],
["Surajmal Stadium", "Udyog Nagar"],
["Udyog Nagar", "Peera Garhi"],
["Peera Garhi", "Paschim Vihar West"],
["Paschim Vihar West", "Paschim Vihar East"],
["Paschim Vihar East", "Madipur"],
["Madipur", "Shivaji Park"],
["Shivaji Park", "Punjabi Bagh"],
["Punjabi Bagh", "Ashok Park Main"],
["Ashok Park Main", "Satguru Ram Singh Marg"],
["Satguru Ram Singh Marg", "Kirti Nagar"],

// Violet Line
["Kashmere Gate", "Lal Quila"],
["Lal Quila", "Jama Masjid"],
["Jama Masjid", "Delhi Gate"],
["Delhi Gate", "ITO"],
["ITO", "Mandi House"],
["Mandi House", "Janpath"],
["Janpath", "Central Secretariat"],
["Central Secretariat", "Khan Market"],
["Khan Market", "Jawaharlal Nehru Stadium"],
["Jawaharlal Nehru Stadium", "Jangpura"],
["Jangpura", "Lajpat Nagar"],
["Lajpat Nagar", "Moolchand"],
["Moolchand", "Kailash Colony"],
["Kailash Colony", "Nehru Place"],
["Nehru Place", "Kalkaji Mandir"],
["Kalkaji Mandir", "Govind Puri"],
["Govind Puri", "Harkesh Nagar Okhla"],
["Harkesh Nagar Okhla", "Jasola Apollo"],
["Jasola Apollo", "Sarita Vihar"],
["Sarita Vihar", "Mohan Estate"],
["Mohan Estate", "Tughlakabad"],
["Tughlakabad", "Badarpur"],
["Badarpur", "Sarai"],
["Sarai", "NHPC Chowk"],
["NHPC Chowk", "Mewala Maharajpur"],
["Mewala Maharajpur", "Sector 28"],
["Sector 28", "Badkhal Mor"],
["Badkhal Mor", "Old Faridabad"],
["Old Faridabad", "Neelam Chowk Ajronda"],
["Neelam Chowk Ajronda", "Bata Chowk"],
["Bata Chowk", "Escorts Mujesar"],
["Escorts Mujesar", "Sant Surdas (Sihi)"],
["Sant Surdas (Sihi)", "Raja Nahar Singh"],

// Pink Line
["Majlis Park", "Azadpur"],
["Azadpur", "Shalimar Bagh"],
["Shalimar Bagh", "Netaji Subhash Place"],
["Netaji Subhash Place", "Shakurpur"],
["Shakurpur", "Punjabi Bagh West"],
["Punjabi Bagh West", "ESI Hospital"],
["ESI Hospital", "Rajouri Garden"],
["Rajouri Garden", "Maya Puri"],
["Maya Puri", "Naraina Vihar"],
["Naraina Vihar", "Delhi Cantt"],
["Delhi Cantt", "Durgabai Deshmukh South Campus"],
["Durgabai Deshmukh South Campus", "Sir Vishweshwaraiah Moti Bagh"],
["Sir Vishweshwaraiah Moti Bagh", "Bhikaji Cama Place"],
["Bhikaji Cama Place", "Sarojini Nagar"],
["Sarojini Nagar", "INA"],
["INA", "South Extension"],
["South Extension", "Lajpat Nagar"],
["Lajpat Nagar", "Vinobapuri"],
["Vinobapuri", "Ashram"],
["Ashram", "Hazrat Nizamuddin"],
["Hazrat Nizamuddin", "Mayur Vihar-I"],
["Mayur Vihar-I", "Mayur Vihar Pocket I"],
["Mayur Vihar Pocket I", "Trilokpuri Sanjay Lake"],
["Trilokpuri Sanjay Lake", "East Vinod Nagar - Mayur Vihar-II"],
["East Vinod Nagar - Mayur Vihar-II", "Mandawali - West Vinod Nagar"],
["Mandawali - West Vinod Nagar", "IP Extension"],
["IP Extension", "Anand Vihar"],
["Anand Vihar", "Karkarduma"],
["Karkarduma", "Karkarduma Court"],
["Karkarduma Court", "Krishna Nagar"],
["Krishna Nagar", "East Azad Nagar"],
["East Azad Nagar", "Welcome"],
["Welcome", "Jaffrabad"],
["Jaffrabad", "Maujpur - Babarpur"],
["Maujpur - Babarpur", "Gokulpuri"],
["Gokulpuri", "Johri Enclave"],
["Johri Enclave", "Shiv Vihar"],

// Magenta Line (partial, as not all stations are visible)
["Janakpuri West", "Dabri Mor"],
["Dabri Mor", "Dashrathpuri"],
["Dashrathpuri", "Palam"],
["Palam", "Sadar Bazaar"],
["Sadar Bazaar", "Terminal 1 IGI Airport"],
["Terminal 1 IGI Airport", "Shankar Vihar"],
["Shankar Vihar", "Vasant Vihar"],
["Vasant Vihar", "Munirka"],
["Munirka", "R.K. Puram"],
["R.K. Puram", "IIT"],
["IIT", "Hauz Khas"],
["Hauz Khas", "Panchsheel Park"],
["Panchsheel Park", "Chirag Delhi"],
["Chirag Delhi", "Greater Kailash"],
["Greater Kailash", "Nehru Enclave"],
["Nehru Enclave", "Kalkaji Mandir"],
["Kalkaji Mandir", "Okhla NSIC"],
// Magenta Line (continued)
    ["Okhla NSIC", "Sukhdev Vihar"],
    ["Sukhdev Vihar", "Jamia Millia Islamia"],
    ["Jamia Millia Islamia", "Okhla Vihar"],
    ["Okhla Vihar", "Jasola Vihar Shaheen Bagh"],
    ["Jasola Vihar Shaheen Bagh", "Kalindi Kunj"],
    ["Kalindi Kunj", "Okhla Bird Sanctuary"],
    ["Okhla Bird Sanctuary", "Botanical Garden"],

    // Airport Express Line
    ["New Delhi", "Shivaji Stadium"],
    ["Shivaji Stadium", "Dhaula Kuan"],
    ["Dhaula Kuan", "Delhi Aerocity"],
    ["Delhi Aerocity", "IGI Airport"],
    ["IGI Airport", "Dwarka Sector 21"],

    // Grey Line
    ["Dwarka", "Nangli"],
    ["Nangli", "Najafgarh"],
    ["Najafgarh", "Dhansa Bus Stand"],

    // Rapid Metro Gurgaon (connected to Yellow Line)
    ["Sikanderpur", "Phase 1"],
    ["Phase 1", "Phase 2"],
    ["Phase 2", "Phase 3"],
    ["Phase 3", "Cyber City"],
    ["Cyber City", "Belvedere Towers"],
    ["Belvedere Towers", "Moulsari Avenue"],
    ["Moulsari Avenue", "Sector 53-54"],
    ["Sector 53-54", "Sector 54 Chowk"],
    ["Sector 54 Chowk", "Sector 55-56"],

    // Noida-Greater Noida Line (Aqua Line, partially visible)
    ["Noida Sector 51", "Noida Sector 50"],
    ["Noida Sector 50", "Noida Sector 76"],
    ["Noida Sector 76", "Noida Sector 101"],
    ["Noida Sector 101", "Noida Sector 81"],
    ["Noida Sector 81", "NSEZ"],
    ["NSEZ", "Noida Sector 83"],
    ["Noida Sector 83", "Noida Sector 137"],
    ["Noida Sector 137", "Noida Sector 142"],
    ["Noida Sector 142", "Noida Sector 143"],
    ["Noida Sector 143", "Noida Sector 144"],
    ["Noida Sector 144", "Noida Sector 145"],
    ["Noida Sector 145", "Noida Sector 146"],
    ["Noida Sector 146", "Noida Sector 147"],
    ["Noida Sector 147", "Noida Sector 148"],
    ["Noida Sector 148", "Knowledge Park 2"],
    ["Knowledge Park 2", "Pari Chowk"],
    ["Pari Chowk", "Alpha 1"],
    ["Alpha 1", "Delta 1"],
    ["Delta 1", "GNIDA Office"],
  // Magenta Line (continued)
    ["Okhla NSIC", "Sukhdev Vihar"],
    ["Sukhdev Vihar", "Jamia Millia Islamia"],
    ["Jamia Millia Islamia", "Okhla Vihar"],
    ["Okhla Vihar", "Jasola Vihar Shaheen Bagh"],
    ["Jasola Vihar Shaheen Bagh", "Kalindi Kunj"],
    ["Kalindi Kunj", "Okhla Bird Sanctuary"],
    ["Okhla Bird Sanctuary", "Botanical Garden"],

    // Airport Express Line
    ["New Delhi", "Shivaji Stadium"],
    ["Shivaji Stadium", "Dhaula Kuan"],
    ["Dhaula Kuan", "Delhi Aerocity"],
    ["Delhi Aerocity", "IGI Airport"],
    ["IGI Airport", "Dwarka Sector 21"],

    // Grey Line
    ["Dwarka", "Nangli"],
    ["Nangli", "Najafgarh"],
    ["Najafgarh", "Dhansa Bus Stand"],

    // Rapid Metro Gurgaon (connected to Yellow Line)
    ["Sikanderpur", "Phase 1"],
    ["Phase 1", "Phase 2"],
    ["Phase 2", "Phase 3"],
    ["Phase 3", "Cyber City"],
    ["Cyber City", "Belvedere Towers"],
    ["Belvedere Towers", "Moulsari Avenue"],
    ["Moulsari Avenue", "Sector 53-54"],
    ["Sector 53-54", "Sector 54 Chowk"],
    ["Sector 54 Chowk", "Sector 55-56"],

    // Noida-Greater Noida Line (Aqua Line, partially visible)
    ["Noida Sector 51", "Noida Sector 50"],
    ["Noida Sector 50", "Noida Sector 76"],
    ["Noida Sector 76", "Noida Sector 101"],
    ["Noida Sector 101", "Noida Sector 81"],
    ["Noida Sector 81", "NSEZ"],
    ["NSEZ", "Noida Sector 83"],
    ["Noida Sector 83", "Noida Sector 137"],
    ["Noida Sector 137", "Noida Sector 142"],
    ["Noida Sector 142", "Noida Sector 143"],
    ["Noida Sector 143", "Noida Sector 144"],
    ["Noida Sector 144", "Noida Sector 145"],
    ["Noida Sector 145", "Noida Sector 146"],
    ["Noida Sector 146", "Noida Sector 147"],
    ["Noida Sector 147", "Noida Sector 148"],
    ["Noida Sector 148", "Knowledge Park 2"],
    ["Knowledge Park 2", "Pari Chowk"],
    ["Pari Chowk", "Alpha 1"],
    ["Alpha 1", "Delta 1"],
    ["Delta 1", "GNIDA Office"]

];

foreach ($connections as $connection) {
    $metro->addConnection($connection[0], $connection[1]);
}

// API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['start']) && isset($_GET['end'])) {
    $start = $_GET['start'];
    $end = $_GET['end'];
    
    list($path, $numStops) = $metro->dijkstra($start, $end);
    
    header('Content-Type: application/json');
    echo json_encode([
        'path' => $path,
        'numStops' => $numStops
    ]);
} else {
    // Handle invalid requests
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request. Please provide start and end parameters.']);
}
