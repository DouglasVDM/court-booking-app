import { useEffect, useState } from 'react';
import axios from 'axios';

const useStartTimes = (apiEndpointPrefix) => {
  const [startTimes, setStartTimes] = useState([]);

  useEffect(() => {
    const fetchStartTimes = async () => {
      try {
        const startTimesResponse = await axios.get(`${apiEndpointPrefix}/start-times`);
        setStartTimes(startTimesResponse.data);
        console.log("startTimesResponse", startTimesResponse.data);
      } catch (err) {
        console.error("Error fetching start times:", err.message);
      }
    };

    fetchStartTimes();
  }, [apiEndpointPrefix]);

  return { startTimes };
};

export default useStartTimes;
