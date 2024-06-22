// xampp/htdocs/delhi-metro-navigator/frontend/src/components/StationList.jsx
import React, { useEffect, useState } from 'react';
import { getStations } from '../services/api';

const StationList = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      const data = await getStations();
      setStations(data);
    };
    fetchStations();
  }, []);

  return (
    <div>
      <h1>Stations</h1>
      <ul>
        {stations.map(station => (
          <li key={station.station_id}>{station.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;
