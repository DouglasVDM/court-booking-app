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
import useCourts from "./customHooks/useCourts";
import useMembers from "./customHooks/useMembers";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

  const { bookingTypes, setBookingTypes } = useBookingTypes(apiEndpointPrefix);
  const { durations, setDurations } = useDurations(apiEndpointPrefix);
  const { startTimes, setStartTimes } = useStartTimes(apiEndpointPrefix);
  const { daysOfWeek, setDaysOfWeek } = useDaysOfWeek(apiEndpointPrefix);
  const { bookings, setBookings } = useBookings(apiEndpointPrefix);
  const { courts, setCourts } = useCourts(apiEndpointPrefix);
  const { members, setMembers } = useMembers(apiEndpointPrefix);

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
      {show ? (
        ""
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
      {/* <Courts courts={courts} setCourts={setCourts} />
      <br />
      <br />
      <DaysOfWeek daysOfWeek={daysOfWeek} setDaysOfWeek={setDaysOfWeek} />
      <br />
      <br />
      <StartTimes startTimes={startTimes} setStartTimes={setStartTimes} />
      <br />
      <br />
      <Durations durations={durations} setDurations={setDurations} />
      <br />
      <br />
      <BookingType */}
      {/* bookingTypes={bookingTypes}
        setBookingTypes={setBookingTypes}
      /> */}
    </>
  );
};

export default App;
