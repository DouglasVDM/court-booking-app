// import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Custom Hooks for fetching data
import useBookingTypes from "./customHooks/useBookingTypes";
import useDurations from "./customHooks/useDurations";
import useStartTimes from "./customHooks/useStartTimes";
import useDaysOfWeek from "./customHooks/useDaysOfWeek";
import useCourts from "./customHooks/useCourts";
import useMembers from "./customHooks/useMembers";
import useBookings from "./customHooks/useBookings";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

// Components
import Bookings from "./components/Bookings";
import HomePage from "./components/pages/HomePage";
import BookingForm from "./components/BookingForm";
import LoginForm from "./components/LoginForm";
import CallbackPage from "./components/pages/CallbackPage";

const App = () => {
  const { bookings } = useBookings(apiEndpointPrefix);
  const { bookingTypes } = useBookingTypes(apiEndpointPrefix);
  const { durations } = useDurations(apiEndpointPrefix);
  const { startTimes } = useStartTimes(apiEndpointPrefix);
  const { daysOfWeek } = useDaysOfWeek(apiEndpointPrefix);

  const { courts } = useCourts(apiEndpointPrefix);
  const { members } = useMembers(apiEndpointPrefix);

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/bookings" element={<Bookings bookings={bookings} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/booking-form"
          element={
            <BookingForm
              courts={courts}
              daysOfWeek={daysOfWeek}
              startTimes={startTimes}
              durations={durations}
              bookingTypes={bookingTypes}
              members={members}
            />
          }
        />
      </Routes>
  );
};

// App.propTypes = {
//   courts: PropTypes.array.isRequired,
//   daysOfWeek: PropTypes.array.isRequired,
//   startTimes: PropTypes.array.isRequired,
//   durations: PropTypes.array.isRequired,
//   bookingTypes: PropTypes.array.isRequired,
//   members: PropTypes.array.isRequired,
// };

export default App;
