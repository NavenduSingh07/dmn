// import React, { useState } from 'react';

// const delhiMetroData = {
//   "lines": [
//     {
//       "name": "Yellow",
//       "stations": [
//         "Samaypur Badli", "Rohini Sector 18", "Badli Mor", "Jahangirpuri", "Adarsh Nagar", 
//         "Azadpur", "Model Town", "G.T.B. Nagar", "Vishwa Vidyalaya", "Vidhan Sabha", 
//         "Civil Lines", "Kashmere Gate", "Chandni Chowk", "Chawri Bazar", "New Delhi", 
//         "Rajiv Chowk", "Patel Chowk", "Central Secretariat", "Udyog Bhawan", 
//         "Lok Kalyan Marg", "Jor Bagh", "INA", "AIIMS", "Green Park", "Hauz Khas"
//       ]
//     },
//     {
//       "name": "Blue",
//       "stations": [
//         "Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10", 
//         "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14", 
//         "Dwarka", "Nawada", "Uttam Nagar West", "Uttam Nagar East", "Janakpuri West", 
//         "Janakpuri East", "Tilak Nagar", "Subhash Nagar", "Tagore Garden", 
//         "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar", "Shadipur", 
//         "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan", "R K Ashram Marg", 
//         "Rajiv Chowk", "Barakhamba Road", "Mandi House", "Supreme Court", "Indraprastha", 
//         "Yamuna Bank", "Laxmi Nagar", "Nirman Vihar", "Preet Vihar", "Karkarduma", 
//         "Anand Vihar ISBT", "Kaushambi", "Vaishali"
//       ]
//     },
//     {
//       "name": "Red",
//       "stations": [
//         "Rithala", "Rohini West", "Rohini East", "Pitampura", "Kohat Enclave", 
//         "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", 
//         "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate", 
//         "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Dilshad Garden", 
//         "Jhilmil", "Mansarovar Park", "Shahdara", "Welcome", "Shastri Park", 
//         "Kashmere Gate"
//       ]
//     },
//     {
//       "name": "Green",
//       "stations": [
//         "Inderlok", "Ashok Park Main", "Punjabi Bagh", "Shivaji Park", "Madipur", 
//         "Paschim Vihar East", "Paschim Vihar West", "Peera Garhi", "Udyog Nagar", 
//         "Surajmal Stadium", "Nangloi", "Nangloi Railway Station", "Rajdhani Park", 
//         "Mundka"
//       ]
//     },
//     {
//       "name": "Violet",
//       "stations": [
//         "Kashmere Gate", "Lal Quila", "Jama Masjid", "Delhi Gate", "ITO", "Mandi House", 
//         "Janpath", "Central Secretariat", "Khan Market", "Jawaharlal Nehru Stadium", 
//         "Jangpura", "Lajpat Nagar", "Moolchand", "Kailash Colony", "Nehru Place", 
//         "Kalkaji Mandir", "Govind Puri", "Harkesh Nagar", "Jasola Apollo", "Sarita Vihar", 
//         "Mohan Estate", "Tughlakabad", "Badarpur Border", "Sarai", "NHPC Chowk", 
//         "Mewala Maharajpur", "Sector 28", "Badkhal Mor", "Old Faridabad", 
//         "Neelam Chowk Ajronda", "Bata Chowk", "Escorts Mujesar", "Sant Surdas (SIHI)", 
//         "Raja Nahar Singh"
//       ]
//     },
//     {
//       "name": "Pink",
//       "stations": [
//         "Majlis Park", "Azadpur", "Shalimar Bagh", "Netaji Subhash Place", "Shakurpur", 
//         "Punjabi Bagh West", "ESI Hospital", "Mayapuri", "Naraina Vihar", "Delhi Cantt", 
//         "Durgabai Deshmukh South Campus", "Sir Vishweshwaraiah Moti Bagh", "Bhikaji Cama Place", 
//         "Sarojini Nagar", "INA", "South Extension", "Lajpat Nagar", "Vinobapuri", 
//         "Ashram", "Hazrat Nizamuddin", "Mayur Vihar Phase-1", "Mayur Vihar Pocket 1", 
//         "Trilokpuri Sanjay Lake", "East Vinod Nagar-Mayur Vihar-II", "Mandawali-West Vinod Nagar", 
//         "IP Extension", "Anand Vihar ISBT", "Karkarduma", "Karkarduma Court", "Krishna Nagar", 
//         "East Azad Nagar", "Welcome", "Jaffrabad", "Maujpur", "Gokulpuri", "Johri Enclave", 
//         "Shiv Vihar"
//       ]
//     },
//     {
//       "name": "Magenta",
//       "stations": [
//         "Janakpuri West", "Dabri Mor", "Dashrathpuri", "Palam", "Sadar Bazar Cantonment", 
//         "Terminal 1 IGI Airport", "Shankar Vihar", "Vasant Vihar", "Munirka", "R.K. Puram", 
//         "IIT Delhi", "Hauz Khas", "Panchsheel Park", "Chirag Delhi", "Greater Kailash", 
//         "Nehru Enclave", "Kalkaji Mandir", "Okhla NSIC", "Sukhdev Vihar", "Jamia Millia Islamia", 
//         "Okhla Vihar", "Jasola Vihar Shaheen Bagh", "Kalindi Kunj", "Okhla Bird Sanctuary", 
//         "Botanical Garden"
//       ]
//     },
//     {
//       "name": "Grey",
//       "stations": [
//         "Dwarka", "Nangli", "Najafgarh"
//       ]
//     },
//     {
//       "name": "Orange",
//       "stations": [
//         "New Delhi", "Shivaji Stadium", "Dhaula Kuan", "Delhi Aerocity", "IGI Airport", "Dwarka Sector 21"
//       ]
//     },
//     {
//       "name": "Rapid Metro",
//       "stations": [
//         "Sector 55-56", "Sector 54 Chowk", "Sector 53-54", "Sector 42-43", "Phase-1", 
//         "Sikanderpur", "Phase 2", "Phase 3", "Belvedere Towers", "Cyber City", "Moulsari Avenue", 
//         "DLF Phase III"
//       ]
//     }
//   ],
//   "interchanges": [
//     {"station": "Rajiv Chowk", "lines": ["Yellow", "Blue"]},
//     {"station": "Kashmere Gate", "lines": ["Red", "Yellow", "Violet"]},
//     {"station": "Central Secretariat", "lines": ["Yellow", "Violet"]},
//     {"station": "Mandi House", "lines": ["Blue", "Violet"]},
//     {"station": "Inderlok", "lines": ["Red", "Green"]},
//     {"station": "Kirti Nagar", "lines": ["Blue", "Green"]},
//     {"station": "Yamuna Bank", "lines": ["Blue"]},
//     {"station": "New Delhi", "lines": ["Yellow", "Orange"]},
//     {"station": "Dwarka Sector 21", "lines": ["Blue", "Orange"]},
//     {"station": "Azadpur", "lines": ["Yellow", "Pink"]},
//     {"station": "Netaji Subhash Place", "lines": ["Red", "Pink"]},
//     {"station": "Janakpuri West", "lines": ["Blue", "Magenta"]},
//     {"station": "Hauz Khas", "lines": ["Yellow", "Magenta"]},
//     {"station": "Kalkaji Mandir", "lines": ["Violet", "Magenta"]},
//     {"station": "Botanical Garden", "lines": ["Blue", "Magenta"]},
//     {"station": "Welcome", "lines": ["Red", "Pink"]},
//     {"station": "Anand Vihar ISBT", "lines": ["Blue", "Pink"]},
//     {"station": "INA", "lines": ["Yellow", "Pink"]},
//     {"station": "Lajpat Nagar", "lines": ["Violet", "Pink"]}
//   ]
// };

// // Utility functions to build the graph and find the shortest path using Dijkstra's algorithm

// function buildGraph(data) {
//   const graph = {};
  
//   data.lines.forEach(line => {
//     line.stations.forEach((station, index) => {
//       if (!graph[station]) {
//         graph[station] = [];
//       }
//       if (index > 0) {
//         graph[station].push({ station: line.stations[index - 1], line: line.name });
//       }
//       if (index < line.stations.length - 1) {
//         graph[station].push({ station: line.stations[index + 1], line: line.name });
//       }
//     });
//   });
  
//   data.interchanges.forEach(interchange => {
//     interchange.lines.forEach(line => {
//       const stations = data.lines.find(l => l.name === line).stations;
//       stations.forEach(station => {
//         if (station === interchange.station) {
//           graph[station].forEach(connection => {
//             if (connection.station === interchange.station && connection.line !== line) {
//               graph[station].push({ station: interchange.station, line: line });
//             }
//           });
//         }
//       });
//     });
//   });
  
//   return graph;
// }

// function dijkstra(graph, start, end) {
//   const distances = {};
//   const previous = {};
//   const queue = new Set();

//   for (const station in graph) {
//     distances[station] = Infinity;
//     previous[station] = null;
//     queue.add(station);
//   }

//   distances[start] = 0;

//   while (queue.size > 0) {
//     const current = Array.from(queue).reduce((minStation, station) => {
//       return distances[station] < distances[minStation] ? station : minStation;
//     });

//     queue.delete(current);

//     if (current === end) {
//       const path = [];
//       let station = end;
//       while (station) {
//         path.unshift(station);
//         station = previous[station];
//       }
//       return { distance: distances[end], path };
//     }

//     graph[current].forEach(neighbor => {
//       const alt = distances[current] + 1;
//       if (alt < distances[neighbor.station]) {
//         distances[neighbor.station] = alt;
//         previous[neighbor.station] = current;
//       }
//     });
//   }

//   return { distance: Infinity, path: [] };
// }

// function New() {
//   const [startStation, setStartStation] = useState('');
//   const [endStation, setEndStation] = useState('');
//   const [routeInfo, setRouteInfo] = useState(null);
//   const [error, setError] = useState(null);
//   const [suggestions, setSuggestions] = useState([]);

//   const graph = buildGraph(delhiMetroData);

//   const findRoute = () => {
//     if (!startStation || !endStation) {
//       setError('Please enter both start and end stations.');
//       return;
//     }

//     const { distance, path } = dijkstra(graph, startStation, endStation);

//     if (distance === Infinity) {
//       setError('No route found.');
//       setRouteInfo(null);
//     } else {
//       const lineInfo = path.map((station, index) => {
//         if (index < path.length - 1) {
//           const nextStation = path[index + 1];
//           const line = graph[station].find(neighbor => neighbor.station === nextStation).line;
//           return { station, line, nextStation };
//         } else {
//           return { station, line: '', nextStation: '' };
//         }
//       });
//       setRouteInfo({
//         total_stations: distance,
//         interchanges: [],
//         line_info: lineInfo
//       });
//       setError(null);
//     }
//   };

//   const handleInputChange = (event, setFunction) => {
//     const inputValue = event.target.value;
//     setFunction(inputValue);

//     if (inputValue.length >= 2) {
//       fetchSuggestions(inputValue);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const fetchSuggestions = (inputValue) => {
//     const allStations = delhiMetroData.lines.flatMap(line => line.stations);
//     const filteredSuggestions = allStations.filter(station => 
//       station.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//   };

//   const handleSuggestionClick = (stationName, setFunction) => {
//     setFunction(stationName);
//     setSuggestions([]);
//   };

//   return (
//     <div className="New">
//       <h1>Delhi Metro Route Finder</h1>

//       <div>
//         <label htmlFor="startStation">Start Station:</label>
//         <input
//           type="text"
//           id="startStation"
//           value={startStation}
//           onChange={(e) => handleInputChange(e, setStartStation)}
//           placeholder="Enter start station"
//         />
//         {suggestions.length > 0 && (
//           <ul className="suggestions">
//             {suggestions.map((station, index) => (
//               <li key={index} onClick={() => handleSuggestionClick(station, setStartStation)}>
//                 {station}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div>
//         <label htmlFor="endStation">End Station:</label>
//         <input
//           type="text"
//           id="endStation"
//           value={endStation}
//           onChange={(e) => handleInputChange(e, setEndStation)}
//           placeholder="Enter end station"
//         />
//         {suggestions.length > 0 && (
//           <ul className="suggestions">
//             {suggestions.map((station, index) => (
//               <li key={index} onClick={() => handleSuggestionClick(station, setEndStation)}>
//                 {station}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <button onClick={findRoute}>Find Route</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {routeInfo && (
//         <div>
//           <h2>Route Information</h2>
//           <p><strong>Number of Stops:</strong> {routeInfo.total_stations}</p>
//           <p><strong>Interchanges:</strong> {routeInfo.interchanges.join(', ')}</p>

//           <ul>
//             {routeInfo.line_info.map((info, index) => (
//               <li key={index}>
//                 {info.station} ({info.line}) - Next Station: {info.nextStation}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default New;






import React, { useState } from 'react';

const delhiMetroData = {
  "lines": [
    {
      "name": "Yellow",
      "stations": [
        "Samaypur Badli", "Rohini Sector 18", "Badli Mor", "Jahangirpuri", "Adarsh Nagar", 
        "Azadpur", "Model Town", "G.T.B. Nagar", "Vishwa Vidyalaya", "Vidhan Sabha", 
        "Civil Lines", "Kashmere Gate", "Chandni Chowk", "Chawri Bazar", "New Delhi", 
        "Rajiv Chowk", "Patel Chowk", "Central Secretariat", "Udyog Bhawan", 
        "Lok Kalyan Marg", "Jor Bagh", "INA", "AIIMS", "Green Park", "Hauz Khas"
      ]
    },
    {
      "name": "Blue",
      "stations": [
        "Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10", 
        "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14", 
        "Dwarka", "Nawada", "Uttam Nagar West", "Uttam Nagar East", "Janakpuri West", 
        "Janakpuri East", "Tilak Nagar", "Subhash Nagar", "Tagore Garden", 
        "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar", "Shadipur", 
        "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan", "R K Ashram Marg", 
        "Rajiv Chowk", "Barakhamba Road", "Mandi House", "Supreme Court", "Indraprastha", 
        "Yamuna Bank", "Laxmi Nagar", "Nirman Vihar", "Preet Vihar", "Karkarduma", 
        "Anand Vihar ISBT", "Kaushambi", "Vaishali"
      ]
    },
    {
      "name": "Red",
      "stations": [
        "Rithala", "Rohini West", "Rohini East", "Pitampura", "Kohat Enclave", 
        "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", 
        "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate", 
        "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Dilshad Garden", 
        "Jhilmil", "Mansarovar Park", "Shahdara", "Welcome", "Shastri Park", 
        "Kashmere Gate"
      ]
    },
    {
      "name": "Green",
      "stations": [
        "Inderlok", "Ashok Park Main", "Punjabi Bagh", "Shivaji Park", "Madipur", 
        "Paschim Vihar East", "Paschim Vihar West", "Peera Garhi", "Udyog Nagar", 
        "Surajmal Stadium", "Nangloi", "Nangloi Railway Station", "Rajdhani Park", 
        "Mundka"
      ]
    },
    {
      "name": "Violet",
      "stations": [
        "Kashmere Gate", "Lal Quila", "Jama Masjid", "Delhi Gate", "ITO", "Mandi House", 
        "Janpath", "Central Secretariat", "Khan Market", "Jawaharlal Nehru Stadium", 
        "Jangpura", "Lajpat Nagar", "Moolchand", "Kailash Colony", "Nehru Place", 
        "Kalkaji Mandir", "Govind Puri", "Harkesh Nagar", "Jasola Apollo", "Sarita Vihar", 
        "Mohan Estate", "Tughlakabad", "Badarpur Border", "Sarai", "NHPC Chowk", 
        "Mewala Maharajpur", "Sector 28", "Badkhal Mor", "Old Faridabad", 
        "Neelam Chowk Ajronda", "Bata Chowk", "Escorts Mujesar", "Sant Surdas (SIHI)", 
        "Raja Nahar Singh"
      ]
    },
    {
      "name": "Pink",
      "stations": [
        "Majlis Park", "Azadpur", "Shalimar Bagh", "Netaji Subhash Place", "Shakurpur", 
        "Punjabi Bagh West", "ESI Hospital", "Mayapuri", "Naraina Vihar", "Delhi Cantt", 
        "Durgabai Deshmukh South Campus", "Sir Vishweshwaraiah Moti Bagh", "Bhikaji Cama Place", 
        "Sarojini Nagar", "INA", "South Extension", "Lajpat Nagar", "Vinobapuri", 
        "Ashram", "Hazrat Nizamuddin", "Mayur Vihar Phase-1", "Mayur Vihar Pocket 1", 
        "Trilokpuri Sanjay Lake", "East Vinod Nagar-Mayur Vihar-II", "Mandawali-West Vinod Nagar", 
        "IP Extension", "Anand Vihar ISBT", "Karkarduma", "Karkarduma Court", "Krishna Nagar", 
        "East Azad Nagar", "Welcome", "Jaffrabad", "Maujpur", "Gokulpuri", "Johri Enclave", 
        "Shiv Vihar"
      ]
    },
    {
      "name": "Magenta",
      "stations": [
        "Janakpuri West", "Dabri Mor", "Dashrathpuri", "Palam", "Sadar Bazar Cantonment", 
        "Terminal 1 IGI Airport", "Shankar Vihar", "Vasant Vihar", "Munirka", "R.K. Puram", 
        "IIT Delhi", "Hauz Khas", "Panchsheel Park", "Chirag Delhi", "Greater Kailash", 
        "Nehru Enclave", "Kalkaji Mandir", "Okhla NSIC", "Sukhdev Vihar", "Jamia Millia Islamia", 
        "Okhla Vihar", "Jasola Vihar Shaheen Bagh", "Kalindi Kunj", "Okhla Bird Sanctuary", 
        "Botanical Garden"
      ]
    },
    {
      "name": "Grey",
      "stations": [
        "Dwarka", "Nangli", "Najafgarh"
      ]
    },
    {
      "name": "Orange",
      "stations": [
        "New Delhi", "Shivaji Stadium", "Dhaula Kuan", "Delhi Aerocity", "IGI Airport", "Dwarka Sector 21"
      ]
    },
    {
      "name": "Rapid Metro",
      "stations": [
        "Sector 55-56", "Sector 54 Chowk", "Sector 53-54", "Sector 42-43", "Phase-1", 
        "Sikanderpur", "Phase 2", "Phase 3", "Belvedere Towers", "Cyber City", "Moulsari Avenue", 
        "DLF Phase III"
      ]
    }
  ],
  "interchanges": [
    {"station": "Rajiv Chowk", "lines": ["Yellow", "Blue"]},
    {"station": "Kashmere Gate", "lines": ["Red", "Yellow", "Violet"]},
    {"station": "Central Secretariat", "lines": ["Yellow", "Violet"]},
    {"station": "Mandi House", "lines": ["Blue", "Violet"]},
    {"station": "Inderlok", "lines": ["Red", "Green"]},
    {"station": "Kirti Nagar", "lines": ["Blue", "Green"]},
    {"station": "Yamuna Bank", "lines": ["Blue"]},
    {"station": "New Delhi", "lines": ["Yellow", "Orange"]},
    {"station": "Dwarka Sector 21", "lines": ["Blue", "Orange"]},
    {"station": "Azadpur", "lines": ["Yellow", "Pink"]},
    {"station": "Netaji Subhash Place", "lines": ["Red", "Pink"]},
    {"station": "Janakpuri West", "lines": ["Blue", "Magenta"]},
    {"station": "Hauz Khas", "lines": ["Yellow", "Magenta"]},
    {"station": "Kalkaji Mandir", "lines": ["Violet", "Magenta"]},
    {"station": "Botanical Garden", "lines": ["Blue", "Magenta"]},
    {"station": "Welcome", "lines": ["Red", "Pink"]},
    {"station": "Anand Vihar ISBT", "lines": ["Blue", "Pink"]},
    {"station": "INA", "lines": ["Yellow", "Pink"]},
    {"station": "Lajpat Nagar", "lines": ["Violet", "Pink"]}
  ]
};

// Utility functions to build the graph and find the shortest path using Dijkstra's algorithm

function buildGraph(data) {
  const graph = {};
  
  data.lines.forEach(line => {
    line.stations.forEach((station, index) => {
      if (!graph[station]) {
        graph[station] = [];
      }
      if (index > 0) {
        graph[station].push({ station: line.stations[index - 1], line: line.name });
      }
      if (index < line.stations.length - 1) {
        graph[station].push({ station: line.stations[index + 1], line: line.name });
      }
    });
  });
  
  data.interchanges.forEach(interchange => {
    interchange.lines.forEach(line => {
      const stations = data.lines.find(l => l.name === line).stations;
      stations.forEach(station => {
        if (station === interchange.station) {
          graph[station].forEach(connection => {
            if (connection.station === interchange.station && connection.line !== line) {
              graph[station].push({ station: interchange.station, line: line });
            }
          });
        }
      });
    });
  });
  
  return graph;
}

function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const queue = new Set();

  for (const station in graph) {
    distances[station] = Infinity;
    previous[station] = null;
    queue.add(station);
  }

  distances[start] = 0;

  while (queue.size > 0) {
    const current = Array.from(queue).reduce((minStation, station) => {
      return distances[station] < distances[minStation] ? station : minStation;
    });

    queue.delete(current);

    if (current === end) {
      const path = [];
      let station = end;
      while (station) {
        path.unshift(station);
        station = previous[station];
      }
      return { distance: distances[end], path };
    }

    graph[current].forEach(neighbor => {
      const alt = distances[current] + 1;
      if (alt < distances[neighbor.station]) {
        distances[neighbor.station] = alt;
        previous[neighbor.station] = current;
      }
    });
  }

  return { distance: Infinity, path: [] };
}

function New() {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [routeInfo, setRouteInfo] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const graph = buildGraph(delhiMetroData);

  const findRoute = () => {
    if (!startStation || !endStation) {
      setError('Please enter both start and end stations.');
      return;
    }

    const { distance, path } = dijkstra(graph, startStation, endStation);

    if (distance === Infinity) {
      setError('No route found.');
      setRouteInfo(null);
    } else {
      const lineInfo = path.map((station, index) => {
        if (index < path.length - 1) {
          const nextStation = path[index + 1];
          const line = graph[station].find(neighbor => neighbor.station === nextStation).line;
          return { station, line, nextStation };
        } else {
          return { station, line: '', nextStation: '' };
        }
      });

      // Track interchanges
      const interchanges = [];
      for (let i = 0; i < lineInfo.length - 1; i++) {
        if (lineInfo[i].line !== lineInfo[i + 1].line) {
          interchanges.push(lineInfo[i].station);
        }
      }

      setRouteInfo({
        total_stations: distance,
        interchanges,
        line_info: lineInfo
      });
      setError(null);
    }
  };

  const handleInputChange = (event, setFunction) => {
    const inputValue = event.target.value;
    setFunction(inputValue);

    if (inputValue.length >= 2) {
      fetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = (inputValue) => {
    const allStations = delhiMetroData.lines.flatMap(line => line.stations);
    const filteredSuggestions = allStations.filter(station => 
      station.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (stationName, setFunction) => {
    setFunction(stationName);
    setSuggestions([]);
  };

  return (
    <div className="New">
      <h1>Delhi Metro Route Finder</h1>

      <div>
        <label htmlFor="startStation">Start Station:</label>
        <input
          type="text"
          id="startStation"
          value={startStation}
          onChange={(e) => handleInputChange(e, setStartStation)}
          placeholder="Enter start station"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((station, index) => (
              <li key={index} onClick={() => handleSuggestionClick(station, setStartStation)}>
                {station}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label htmlFor="endStation">End Station:</label>
        <input
          type="text"
          id="endStation"
          value={endStation}
          onChange={(e) => handleInputChange(e, setEndStation)}
          placeholder="Enter end station"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((station, index) => (
              <li key={index} onClick={() => handleSuggestionClick(station, setEndStation)}>
                {station}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={findRoute}>Find Route</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {routeInfo && (
        <div>
          <h2>Route Information</h2>
          <p><strong>Number of Stops:</strong> {routeInfo.total_stations}</p>
          <p><strong>Interchanges:</strong> {routeInfo.interchanges.join(', ')}</p>

          <ul>
            {routeInfo.line_info.map((info, index) => (
              <li key={index}>
                {info.station} ({info.line}) - Next Station: {info.nextStation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default New;



