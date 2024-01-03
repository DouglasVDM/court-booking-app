import { useState } from "react";
import Button from "react-bootstrap/Button";

// Components
import Courts from "./components/Courts";
import BookingForm from "./components/BookingForm";
import DaysOfWeek from "./components/DaysOfWeek";
import Durations from "./components/Durations";
import StartTimes from "./components/StartTimes";
import BookingType from "./components/BookingType";

// Custom Hooks for fetching data
import useBookingTypes from "./customHooks/useBookingTypes";
import useDurations from "./customHooks/useDurations";
import useStartTimes from "./customHooks/useStartTimes";
import useDaysOfWeek from "./customHooks/useDaysOfWeek";
import useBookings from "./customHooks/useBookings";
import useCourts from "./customHooks/userCourts";

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

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>Court Booking App</h1>
      <br />
      <Button onClick={handleClick} variant="primary" size="lg">
        Book a court
      </Button>
      <br />
      <br />
      {show ? "" : <BookingForm courts={courts} bookings={bookings} />}
      <Courts courts={courts} />
      <br />
      <br />
      <DaysOfWeek daysOfWeek={daysOfWeek} />
      <br />
      <br />
      <StartTimes startTimes={startTimes} />
      <br />
      <br />
      <Durations durations={durations} />
      <br />
      <br />
      <BookingType bookingTypes={bookingTypes} />
    </>
  );
};

export default App;
