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
            // DelhiMetro.php
            const response = await axios.get(`http://localhost/dmn/DelhiMetro.php?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`);
            setRoute(response.data);
            setError('');
        } catch (err) {
            setError('Error finding route. Please try again.');
            setRoute(null);
        }
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
            {route && route.path && (
                <div>
                    <h2>Route Found:</h2>
                    <p>{route.path.join(' -> ')}</p>
                    <p>Number of stops: {route.numStops}</p>
                </div>
            )}
        </div>
    );
};

export default MetroRoutePlanner;
