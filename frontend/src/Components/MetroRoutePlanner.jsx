// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             // DelhiMetro.php
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {route && route.path && (
//                 <div>
//                     <h2>Route Found:</h2>
//                     <p>{route.path.join(' -> ')}</p>
//                     <p>Number of stops: {route.numStops}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MetroRoutePlanner;

// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             // DelhiMetro.php
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {route && route.path && (
//                 <div>
//                     <h2>Route Found:</h2>
//                     <p>{route.path.join(' -> ')}</p>
//                     <p>Number of stops: {route.numStops}</p>
//                     <p>Lines: {route.lines.join(' -> ')}</p>
//                     {route.interchanges.length > 0 && (
//                         <p>Interchanges: {route.interchanges.join(', ')}</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MetroRoutePlanner;


// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             console.error(err); // Log the error to the console
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {route && route.path && (
//                 <div>
//                     <h2>Route Found:</h2>
//                     <p>{route.path.join(' -> ')}</p>
//                     <p>Number of stops: {route.numStops}</p>
//                     <p>Lines: {route.lines.join(' -> ')}</p>
//                     {route.interchanges.length > 0 && (
//                         <p>Interchanges: {route.interchanges.join(', ')}</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MetroRoutePlanner;



// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             console.error(err); // Log the error to the console
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {route && route.path && (
//                 <div>
//                     <h2>Route Found:</h2>
//                     <p>{route.path.join(' -> ')}</p>
//                     <p>Number of stops: {route.numStops}</p>
//                     <p>Lines: {route.lines.join(' -> ')}</p>
//                     {route.interchanges.length > 0 && (
//                         <p>Interchanges: {route.interchanges.join(', ')}</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MetroRoutePlanner;


// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             console.log(`Finding route from ${start} to ${end}`); // Log input
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             console.log(response.data); // Log response
//             if (response.data.error) {
//                 setError(response.data.error);
//                 setRoute(null);
//             } else {
//                 setRoute(response.data);
//                 setError('');
//             }
//         } catch (err) {
//             console.error(err); // Log the error to the console
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {route && route.path && (
//                 <div>
//                     <h2>Route Found:</h2>
//                     <p>{route.path.join(' -> ')}</p>
//                     <p>Number of stops: {route.numStops}</p>
//                     <p>Lines: {route.lines.join(' -> ')}</p>
//                     {route.interchanges.length > 0 && (
//                         <p>Interchanges: {route.interchanges.join(', ')}</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MetroRoutePlanner;


// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             console.error(err);
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     const renderRouteDetails = () => {
//         if (route && route.path && route.lines && route.interchanges) {
//             return (
//                 <div>
//                     <h2>Route Found:</h2>
//                     {route.path.map((station, index) => (
//                         <div key={index}>
//                             <p>
//                                 <strong>{station}</strong>
//                                 {route.lines[index] && (
//                                     <span> ↓{route.lines[index]} Line</span>
//                                 )}
//                             </p>
//                             {index < route.path.length - 1 && (
//                                 <p>Towards {route.path[index + 1]}</p>
//                             )}
//                             {route.interchanges.includes(station) && (
//                                 <p>Change Train</p>
//                             )}
//                         </div>
//                     ))}
//                     <p>Number of stops: {route.numStops}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {renderRouteDetails()}
//         </div>
//     );
// };

// export default MetroRoutePlanner;
// import React, { useState } from 'react';
// import axios from 'axios';

// const MetroRoutePlanner = () => {
//     const [start, setStart] = useState('');
//     const [end, setEnd] = useState('');
//     const [route, setRoute] = useState(null);
//     const [error, setError] = useState('');

//     const findRoute = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
//             setRoute(response.data);
//             setError('');
//         } catch (err) {
//             console.error(err);
//             setError('Error finding route. Please try again.');
//             setRoute(null);
//         }
//     };

//     const renderRouteDetails = () => {
//         if (route && route.path && route.lines && route.interchanges) {
//             return (
//                 <div>
//                     <h2>Route Found:</h2>
//                     {route.path.map((station, index) => (
//                         <div key={index}>
//                             <p>
//                                 <strong>{station}</strong>
//                                 {route.lines[index] && (
//                                     <span> ↓{route.lines[index]} Line</span>
//                                 )}
//                             </p>
//                             {index < route.path.length - 1 && (
//                                 <p>Towards {route.path[index + 1]}</p>
//                             )}
//                             {route.interchanges.includes(station) && (
//                                 <p>Change Train</p>
//                             )}
//                         </div>
//                     ))}
//                     <p>Number of stops: {route.numStops}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div>
//             <h1>Delhi Metro Route Planner</h1>
//             <form onSubmit={findRoute}>
//                 <input
//                     type="text"
//                     value={start}
//                     onChange={(e) => setStart(e.target.value)}
//                     placeholder="Start Station"
//                     required
//                 />
//                 <input
//                     type="text"
//                     value={end}
//                     onChange={(e) => setEnd(e.target.value)}
//                     placeholder="End Station"
//                     required
//                 />
//                 <button type="submit">Find Route</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {renderRouteDetails()}
//         </div>
//     );
// };

// export default MetroRoutePlanner;


import React, { useState } from 'react';
import axios from 'axios';

const MetroRoutePlanner = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [route, setRoute] = useState(null);
    const [error, setError] = useState('');

    const findRoute = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost/dmn/DelhiMetro.php`, {
                params: {
                    start: encodeURIComponent(start),
                    end: encodeURIComponent(end)
                }
            });
            console.log('API Response:', response.data); // Log the response data
            setRoute(response.data);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Error finding route. Please try again.');
            setRoute(null);
        }
    };

    const renderRouteDetails = () => {
        if (route && route.path && route.lineInfo && route.interchanges) {
            return (
                <div>
                    <h2>Route Found:</h2>
                    {route.path.map((station, index) => (
                        <div key={index}>
                            <p>
                                <strong>{station}</strong>
                                {route.lineInfo[index] && (
                                    <span> ↓{route.lineInfo[index].line} Line</span>
                                )}
                            </p>
                            {index < route.path.length - 1 && (
                                <p>Towards {route.lineInfo[index].nextStation}</p>
                            )}
                            {route.interchanges.includes(station) && (
                                <p>Change Train</p>
                            )}
                        </div>
                    ))}
                    <p>Number of stops: {route.numStops}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <h1>Delhi Metro Route Planner</h1>
            <form onSubmit={findRoute}>
                <input
                    type="text"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    placeholder="Start Station"
                    required
                />
                <input
                    type="text"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    placeholder="End Station"
                    required
                />
                <button type="submit">Find Route</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {renderRouteDetails()}
        </div>
    );
};

export default MetroRoutePlanner;

