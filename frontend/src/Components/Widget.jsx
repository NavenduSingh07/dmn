// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function Widget() {
//     const [stations, setStations] = useState([]);
//     const [fromStation, setFromStation] = useState('');
//     const [toStation, setToStation] = useState('');
//     const [shortestRoute, setShortestRoute] = useState(false);
//     const [minimumInterchange, setMinimumInterchange] = useState(false);

//     useEffect(() => {
//         axios.get('http://localhost/dmn/fetchStations.php')
//             .then(response => {
//                 setStations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleFromChange = (e) => {
//         setFromStation(e.target.value);
//     };

//     const handleToChange = (e) => {
//         setToStation(e.target.value);
//     };

//     const handleRouteAndFare = () => {
//         // Add logic to calculate and display route and fare
//     };

//     const resetForm = () => {
//         setFromStation('');
//         setToStation('');
//         setShortestRoute(false);
//         setMinimumInterchange(false);
//     };

//     return (
//         <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
//             <h2 className="text-xl font-semibold mb-2 flex items-center">
//                 <img alt="plan" src="https://placehold.co/20x20" className="mr-2" />
//                 Plan Your Journey
//             </h2>
//             <p className="mb-4">
//                 Click here to plan through <a href="#" className="text-blue-500">Interactive Map</a>
//             </p>
//             <div className="mb-4">
//                 <label className="block text-zinc-700 mb-1">From</label>
//                 <select value={fromStation} onChange={handleFromChange} className="w-full border border-zinc-300 rounded p-2">
//                     <option value="">Type station name or click to select</option>
//                     {stations.map(station => (
//                         <option key={station.id} value={station.station_name}>{station.station_name}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="mb-4">
//                 <label className="block text-zinc-700 mb-1">To</label>
//                 <select value={toStation} onChange={handleToChange} className="w-full border border-zinc-300 rounded p-2">
//                     <option value="">Type station name or click to select</option>
//                     {stations.map(station => (
//                         <option key={station.id} value={station.name}>{station.station_name}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="mb-4">
//                 <label className="block text-zinc-700 mb-1">Leaving</label>
//                 <div className="flex items-center space-x-2">
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded">Now</button>
//                     <a href="#" className="text-blue-500">Change Time</a>
//                 </div>
//             </div>
//             <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Advanced Filter</h3>
//                 <div className="flex items-center mb-2">
//                     <img alt="shortest route" src="https://placehold.co/20x20" className="mr-2" />
//                     <label className="flex items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             checked={shortestRoute}
//                             onChange={(e) => setShortestRoute(e.target.checked)}
//                             className="form-checkbox h-5 w-5 text-red-600"
//                         />
//                         <span>Shortest Route</span>
//                     </label>
//                 </div>
//                 <div className="flex items-center mb-2">
//                     <img alt="minimum interchange" src="https://placehold.co/20x20" className="mr-2" />
//                     <label className="flex items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             checked={minimumInterchange}
//                             onChange={(e) => setMinimumInterchange(e.target.checked)}
//                             className="form-checkbox h-5 w-5 text-red-600"
//                         />
//                         <span>Minimum Interchange</span>
//                     </label>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between">
//                 <a href="#" onClick={resetForm} className="text-red-500">Reset</a>
//                 <button onClick={handleRouteAndFare} className="bg-red-500 text-white px-4 py-2 rounded">Show Route & Fare</button>
//             </div>
//         </div>
//     );
// }

// station_name


// Widget.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import dijkstra from './dijkstra';

// const metroGraph = {
//     "Station1": { "Station2": 5, "Station3": 10 },
//     "Station2": { "Station1": 5, "Station3": 3, "Station4": 7 },
//     "Station3": { "Station1": 10, "Station2": 3, "Station4": 1 },
//     "Station4": { "Station2": 7, "Station3": 1 }
//     // Add more stations and routes as needed
// };

// export default function Widget() {
//     const [stations, setStations] = useState([]);
//     const [fromStation, setFromStation] = useState('');
//     const [toStation, setToStation] = useState('');
//     const [shortestRoute, setShortestRoute] = useState(false);
//     const [minimumInterchange, setMinimumInterchange] = useState(false);

//     useEffect(() => {
//         axios.get('http://localhost/dmn/fetchStations.php')
//             .then(response => {
//                 setStations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleFromChange = (e) => {
//         setFromStation(e.target.value);
//     };

//     const handleToChange = (e) => {
//         setToStation(e.target.value);
//     };

//     const handleRouteAndFare = () => {
//         if (!fromStation || !toStation) {
//             alert("Please select both From and To stations.");
//             return;
//         }

//         const { path, distance } = dijkstra(metroGraph, fromStation, toStation);

//         if (path.length === 0) {
//             alert("No route found.");
//             return;
//         }

//         // Calculate fare (this is a simple example, adjust fare logic as needed)
//         const fare = distance * 2; // For example, 2 units per distance

//         alert(`Route: ${path.join(' -> ')}\nDistance: ${distance}\nFare: ${fare}`);
//     };

//     const resetForm = () => {
//         setFromStation('');
//         setToStation('');
//         setShortestRoute(false);
//         setMinimumInterchange(false);
//     };

//     return (
//         <div className="bg-light p-4 rounded shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
//             <h2 className="h4 mb-3 d-flex align-items-center">
//                 <img alt="plan" src="https://placehold.co/20x20" className="me-2" />
//                 Plan Your Journey
//             </h2>
//             <p className="mb-4">
//                 Click here to plan through <a href="#" className="text-primary">Interactive Map</a>
//             </p>
//             <div className="mb-3">
//                 <label className="form-label">From</label>
//                 <select value={fromStation} onChange={handleFromChange} className="form-select">
//                     <option value="">Type station name or click to select</option>
//                     {stations.map(station => (
//                         <option key={station.id} value={station.station_name}>{station.station_name}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">To</label>
//                 <select value={toStation} onChange={handleToChange} className="form-select">
//                     <option value="">Type station name or click to select</option>
//                     {stations.map(station => (
//                         <option key={station.id} value={station.station_name}>{station.station_name}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Leaving</label>
//                 <div className="d-flex align-items-center gap-2">
//                     <button className="btn btn-primary">Now</button>
//                     <a href="#" className="text-primary">Change Time</a>
//                 </div>
//             </div>
//             <div className="mb-3">
//                 <h3 className="h6 mb-2">Advanced Filter</h3>
//                 <div className="form-check mb-2">
//                     <input
//                         type="checkbox"
//                         checked={shortestRoute}
//                         onChange={(e) => setShortestRoute(e.target.checked)}
//                         className="form-check-input"
//                         id="shortestRoute"
//                     />
//                     <label className="form-check-label" htmlFor="shortestRoute">
//                         Shortest Route
//                     </label>
//                 </div>
//                 <div className="form-check mb-2">
//                     <input
//                         type="checkbox"
//                         checked={minimumInterchange}
//                         onChange={(e) => setMinimumInterchange(e.target.checked)}
//                         className="form-check-input"
//                         id="minimumInterchange"
//                     />
//                     <label className="form-check-label" htmlFor="minimumInterchange">
//                         Minimum Interchange
//                     </label>
//                 </div>
//             </div>
//             <div className="d-flex justify-content-between">
//                 <a href="#" onClick={resetForm} className="text-danger">Reset</a>
//                 <button onClick={handleRouteAndFare} className="btn btn-danger">Show Route & Fare</button>
//             </div>
//         </div>
//     );
// }




import React, { useState } from 'react';
import dijkstra from './dijkstra'; // Adjust the import based on your project structure

const Widget = () => {
    const [graph, setGraph] = useState({});
    const [startNode, setStartNode] = useState('');
    const [endNode, setEndNode] = useState('');
    const [route, setRoute] = useState([]);
    const [fare, setFare] = useState(null);
    const [error, setError] = useState(null);

    const handleGraphChange = (e) => {
        try {
            const inputGraph = JSON.parse(e.target.value);
            setGraph(inputGraph);
            setError(null);
        } catch (err) {
            setError('Invalid graph format');
        }
    };

    const handleStartNodeChange = (e) => {
        setStartNode(e.target.value);
    };

    const handleEndNodeChange = (e) => {
        setEndNode(e.target.value);
    };

    const handleRouteAndFare = () => {
        try {
            const result = dijkstra(graph, startNode, endNode);
            if (result) {
                setRoute(result.path);
                setFare(result.cost);
                setError(null);
            } else {
                setError('No path found');
            }
        } catch (err) {
            setError('An error occurred while calculating the route');
        }
    };

    return (
        <div>
            <h1>Route Finder</h1>
            <div>
                <label>
                    Graph:
                    <textarea onChange={handleGraphChange} />
                </label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>
                    Start Node:
                    <input type="text" value={startNode} onChange={handleStartNodeChange} />
                </label>
            </div>
            <div>
                <label>
                    End Node:
                    <input type="text" value={endNode} onChange={handleEndNodeChange} />
                </label>
            </div>
            <button onClick={handleRouteAndFare}>Find Route</button>
            {route.length > 0 && (
                <div>
                    <h2>Route</h2>
                    <p>{route.join(' -> ')}</p>
                </div>
            )}
            {fare !== null && (
                <div>
                    <h2>Fare</h2>
                    <p>{fare}</p>
                </div>
            )}
        </div>
    );
};

export default Widget;
