import { useEffect, useState } from 'react';
import axios from 'axios';

const useDaysOfWeek = (apiEndpointPrefix) => {
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const fetchDaysOfWeek = async () => {
      try {
        const daysOfWeekResponse = await axios.get(`${apiEndpointPrefix}/days-of-week`);
        setDaysOfWeek(daysOfWeekResponse.data);
        console.log("daysOfWeekResponse", daysOfWeekResponse.data);
      } catch (err) {
        console.error("Error fetching days of the week:", err.message);
      }
    };

    fetchDaysOfWeek();
  }, [apiEndpointPrefix]);

  return { daysOfWeek };
};

export default useDaysOfWeek;
