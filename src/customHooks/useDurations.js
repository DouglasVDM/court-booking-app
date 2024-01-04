import { useEffect, useState } from 'react';
import axios from 'axios';

const useDurations = (apiEndpointPrefix) => {
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    const fetchDurations = async () => {
      try {
        const durationResponse = await axios.get(`${apiEndpointPrefix}/durations`);
        setDurations(durationResponse.data);
        ("durationsResponse", durationResponse.data);
      } catch (err) {
        console.error("Error fetching durations:", err.message);
      }
    };

    fetchDurations();
  }, [apiEndpointPrefix]);

  return { durations, setDurations };
};

export default useDurations;
