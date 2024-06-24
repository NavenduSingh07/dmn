



// import React, { useState } from 'react';

// function New() {
//     const [startStation, setStartStation] = useState('');
//     const [endStation, setEndStation] = useState('');
//     const [routeInfo, setRouteInfo] = useState(null);
//     const [error, setError] = useState(null);

//     const findRoute = () => {
//         if (!startStation || !endStation) {
//             setError('Please enter both start and end stations.');
//             return;
//         }

//         fetch(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(startStation)}&end=${encodeURIComponent(endStation)}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.error) {
//                     setError(data.error);
//                     setRouteInfo(null);
//                 } else {
//                     setRouteInfo(data);
//                     setError(null);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setError('Error fetching data. Please try again later.');
//                 setRouteInfo(null);
//             });
//     };

//     const handleInputChange = (event, setFunction) => {
//         setFunction(event.target.value);
//     };

//     return (
//         <div className="New">
//             <h1>Delhi Metro Route Finder</h1>

//             <div>
//                 <label htmlFor="startStation">Start Station:</label>
//                 <input type="text" id="startStation" value={startStation} onChange={(e) => handleInputChange(e, setStartStation)} placeholder="Enter start station" />
//             </div>

//             <div>
//                 <label htmlFor="endStation">End Station:</label>
//                 <input type="text" id="endStation" value={endStation} onChange={(e) => handleInputChange(e, setEndStation)} placeholder="Enter end station" />
//             </div>

//             <button onClick={findRoute}>Find Route</button>

//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             {routeInfo && (
//                 <div>
//                     <h2>Route Information</h2>
//                     <p><strong>Number of Stops:</strong> {routeInfo.total_stations}</p>
//                     <p><strong>Interchanges:</strong> {routeInfo.interchanges}</p>

//                     <ul>
//                         {routeInfo.line_info.map((info, index) => (
//                             <li key={index}>
//                                 {info.station} ({info.line}) - Next Station: {info.nextStation}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default New;


// import React, { useState } from 'react';

// function New() {
//     const [startStation, setStartStation] = useState('');
//     const [endStation, setEndStation] = useState('');
//     const [routeInfo, setRouteInfo] = useState(null);
//     const [error, setError] = useState(null);

//     const findRoute = () => {
//         if (!startStation || !endStation) {
//             setError('Please enter both start and end stations.');
//             return;
//         }

//         fetch(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(startStation)}&end=${encodeURIComponent(endStation)}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.error) {
//                     setError(data.error);
//                     setRouteInfo(null);
//                 } else {
//                     setRouteInfo(data);
//                     setError(null);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setError('Error fetching data. Please try again later.');
//                 setRouteInfo(null);
//             });
//     };

//     const handleInputChange = (event, setFunction) => {
//         setFunction(event.target.value);
//     };

//     return (
//         <div className="New">
//             <h1>Delhi Metro Route Finder</h1>

//             <div>
//                 <label htmlFor="startStation">Start Station:</label>
//                 <input type="text" id="startStation" value={startStation} onChange={(e) => handleInputChange(e, setStartStation)} placeholder="Enter start station" />
//             </div>

//             <div>
//                 <label htmlFor="endStation">End Station:</label>
//                 <input type="text" id="endStation" value={endStation} onChange={(e) => handleInputChange(e, setEndStation)} placeholder="Enter end station" />
//             </div>

//             <button onClick={findRoute}>Find Route</button>

//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             {routeInfo && (
//                 <div>
//                     <h2>Route Information</h2>
//                     <p><strong>Number of Stops:</strong> {routeInfo.total_stations}</p>
//                     <p><strong>Interchanges:</strong> {routeInfo.interchanges}</p>

//                     <ul>
//                         {routeInfo.line_info.map((info, index) => (
//                             <li key={index}>
//                                 {info.station} ({info.line}) - Next Station: {info.nextStation}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default New;





import React, { useState } from 'react';

function New() {
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [routeInfo, setRouteInfo] = useState(null);
    const [error, setError] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const findRoute = () => {
        if (!startStation || !endStation) {
            setError('Please enter both start and end stations.');
            return;
        }

        fetch(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(startStation)}&end=${encodeURIComponent(endStation)}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setRouteInfo(null);
                } else {
                    setRouteInfo(data);
                    setError(null);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                setRouteInfo(null);
            });
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

    const fetchSuggestions = async (inputValue) => {
        try {
            const response = await fetch(`http://localhost/dmn/autocomplete.php?query=${encodeURIComponent(inputValue)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
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
                    <p><strong>Interchanges:</strong> {routeInfo.interchanges}</p>

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
