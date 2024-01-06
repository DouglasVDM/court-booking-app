import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

// Components
import BookingForm from "./components/BookingForm";
import Bookings from "./components/Bookings";

// Custom Hooks for fetching data
import useBookingTypes from "./customHooks/useBookingTypes";
import useDurations from "./customHooks/useDurations";
import useStartTimes from "./customHooks/useStartTimes";
import useDaysOfWeek from "./customHooks/useDaysOfWeek";
import useBookings from "./customHooks/useBookings";
import useCourts from "./customHooks/useCourts";
import useMembers from "./customHooks/useMembers";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

  const { bookingTypes } = useBookingTypes(apiEndpointPrefix);
  const { durations } = useDurations(apiEndpointPrefix);
  const { startTimes } = useStartTimes(apiEndpointPrefix);
  const { daysOfWeek } = useDaysOfWeek(apiEndpointPrefix);
  const { bookings } = useBookings(apiEndpointPrefix);
  const { courts } = useCourts(apiEndpointPrefix);
  const { members } = useMembers(apiEndpointPrefix);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="m-4">
      <h1>Court Booking App</h1>
      <hr />
      <Bookings bookings={bookings} courts={courts} />
      {show ? (
        <Button
          className="m-4"
          onClick={handleClick}
          variant="primary"
          size="lg"
        >
          Book a court
        </Button>
      ) : (
        <BookingForm
          courts={courts}
          daysOfWeek={daysOfWeek}
          startTimes={startTimes}
          durations={durations}
          bookingTypes={bookingTypes}
          members={members}
        />
      )}
    </div>
  );
};

App.propTypes = {
  courts: PropTypes.array.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
  startTimes: PropTypes.array.isRequired,
  durations: PropTypes.array.isRequired,
  bookingTypes: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
};

export default App;
