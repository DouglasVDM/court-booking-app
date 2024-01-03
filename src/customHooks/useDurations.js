import { useEffect, useState } from 'react';
import axios from 'axios';

const useDurations = (apiEndpointPrefix) => {
  const [durations, setDurations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDurations = async () => {
      try {
        const durationResponse = await axios.get(`${apiEndpointPrefix}/durations`);
        setDurations(durationResponse.data);
        setLoading(false);
        console.log("durationsResponse", durationResponse.data);
      } catch (err) {
        console.error("Error fetching durations:", err.message);
      }
    };

    fetchDurations();
  }, [apiEndpointPrefix]);

  return { durations, loading };
};

export default useDurations;
