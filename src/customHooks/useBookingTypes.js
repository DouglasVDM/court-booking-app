import { useEffect, useState } from 'react';
import axios from 'axios';

const useBookingTypes = (apiEndpointPrefix) => {
  const [bookingTypes, setBookingTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingTypes = async () => {
      try {
        const response = await axios.get(`${apiEndpointPrefix}/booking-types`);
        setBookingTypes(response.data);
        setLoading(false);
        console.log("response", response.data);
      } catch (err) {
        console.error("Error fetching booking types:", err.message);
      }
    };

    fetchBookingTypes();
  }, [apiEndpointPrefix]);

  return { bookingTypes, loading };
};

export default useBookingTypes;
