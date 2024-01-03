import { useEffect, useState } from "react";
import axios from "axios";

const useBookingTypes = (apiEndpointPrefix) => {
  const [bookingTypes, setBookingTypes] = useState([]);

  useEffect(() => {
    const fetchBookingTypes = async () => {
      try {
        const bookingTypesResponse = await axios.get(
          `${apiEndpointPrefix}/booking-types`
        );
        setBookingTypes(bookingTypesResponse.data);
        console.log("bookingTypesResponse", bookingTypesResponse.data);
      } catch (err) {
        console.error("Error fetching booking types:", err.message);
      }
    };

    fetchBookingTypes();
  }, [apiEndpointPrefix]);

  return { bookingTypes };
};

export default useBookingTypes;
