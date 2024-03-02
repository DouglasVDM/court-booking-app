import { useEffect, useState } from 'react';
import axios from 'axios';

const useBookings = (apiEndpointPrefix) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsResponse = await axios.get(`${apiEndpointPrefix}/bookings`);
        setBookings(bookingsResponse.data);
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
      }
    };

    fetchBookings();
  }, [apiEndpointPrefix]);

  return { bookings, setBookings };
};

export default useBookings;
