// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
  // const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <h1>hello world!</h1>
//       </div>
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react';

// function App() {
//     const [stations, setStations] = useState([]);

//     useEffect(() => {
//         // Fetch data from PHP backend
//         fetch('http://localhost/dmn/fetchStations.php')
//             .then(response => response.json())
//             .then(data => setStations(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Station List</h1>
//             <ul>
//                 {stations.map(station => (
//                     <li key={station.id}>
//                         {station.station_name} - {station.line_name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/dmn/fetchStations.php')
            .then(response => {
                setStations(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Delhi Metro Navigator</h1>
            <ul>
                {stations.map(station => (
                    <li key={station.id}>
                        {/* {station.name} - {station.line} */}
                        {station.station_name} - {station.line_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
