// xampp/htdocs/delhi-metro-navigator/frontend/src/services/api.js
import axios from 'axios';

const API_URL = '/api/api.php?endpoint=';

export const getStations = async () => {
  try {
    const response = await axios.get(`${API_URL}stations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stations:', error);
  }
};
