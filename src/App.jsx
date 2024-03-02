// import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

// Custom Hooks for fetching data
import useBookingTypes from "./customHooks/useBookingTypes";
import useDurations from "./customHooks/useDurations";
import useStartTimes from "./customHooks/useStartTimes";
import useDaysOfWeek from "./customHooks/useDaysOfWeek";
import useCourts from "./customHooks/useCourts";
import useBookings from "./customHooks/useBookings";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

// Components
import Bookings from "./components/Bookings";
import HomePage from "./pages/HomePage";
import BookingForm from "./components/BookingForm";
import LoginForm from "./components/LoginForm";
import PageLoader from "./components/PageLoader";
import AuthenticationGuard from "./components/AuthenticationGuard";
import ProfilePage from "./pages/ProfilePage";
import ProtectedPage from "./pages/ProtectedPage";
import AdminPage from "./pages/AdminPage";
import CallbackPage from "./pages/CallbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import PublicPage from "./pages/PublicPage";

const App = () => {
  const { isLoading } = useAuth0();
  const { bookings } = useBookings(apiEndpointPrefix);
  const { bookingTypes } = useBookingTypes(apiEndpointPrefix);
  const { durations } = useDurations(apiEndpointPrefix);
  const { startTimes } = useStartTimes(apiEndpointPrefix);
  const { daysOfWeek } = useDaysOfWeek(apiEndpointPrefix);
  const { courts } = useCourts(apiEndpointPrefix);

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/about" element={<PublicPage />} />
      <Route path="/protected" element={<ProtectedPage/>} />
      <Route
        path="/admin"
        element={<AuthenticationGuard component={AdminPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/bookings" element={<Bookings bookings={bookings} />} />
      <Route
        path="/booking-form"
        element={
          <BookingForm
            courts={courts}
            daysOfWeek={daysOfWeek}
            startTimes={startTimes}
            durations={durations}
            bookingTypes={bookingTypes}
          />
        }
      />
      <Route path="/login" element={<LoginForm />} />
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
