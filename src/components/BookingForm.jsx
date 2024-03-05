import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

import BookingType from "./BookingType";
import Courts from "./Courts";
import DaysOfWeek from "./DaysOfWeek";
import StartTimes from "./StartTimes";
import Durations from "./Durations";
import Members from "./Members";
import PageLayout from "./PageLayout";

const BookingForm = ({
  courts,
  daysOfWeek,
  startTimes,
  durations,
  bookingTypes,
  members,
}) => {
  const { user } = useAuth0();
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedBookingType, setSelectedBookingType] = useState(null);
  const [selectedMember, setSelectedMember] = useState(user.name);

  const handleCourtSelected = (court) => {
    setSelectedCourt(court);
  };
  const handleDayOfWeekSelected = (day) => {
    setSelectedDayOfWeek(day);
  };
  const handleStartTimeSelected = (time) => {
    setSelectedStartTime(time);
  };
  const handleDurationSelected = (hour) => {
    setSelectedDuration(hour);
  };
  const handleBookingTypeSelected = (bookingType) => {
    setSelectedBookingType(bookingType);
  };
  const handleMemberSelected = () => {
    setSelectedMember(user.name);
  };

  const handleSubmit = async () => {
    const bookingFormData = {
      court_name: selectedCourt ? selectedCourt.court_name : null,
      member_name: selectedMember,
      booked_at: new Date().toISOString(),
      day_name: selectedDayOfWeek ? selectedDayOfWeek.day_name : null,
      start_time: selectedStartTime ? selectedStartTime.start_time : null,
      duration_hours: selectedDuration ? selectedDuration.duration_hours : null,
      booking_type_name: selectedBookingType
        ? selectedBookingType.booking_type_name
        : null,
    };

    try {
      const bookingResponse = await axios.post(
        `${apiEndpointPrefix}/bookings`,
        bookingFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Booking created:", bookingResponse.data);
      window.location.reload();
    } catch (err) {
      console.error("Error creating booking", err.message);
    }
  };

  return (
    <PageLayout>
      <div className="m-4">
        <h1>Book a court</h1>
        <Members
          members={members}
          selectedMember={selectedMember}
          onMemberSelected={handleMemberSelected}
        />
        <br />
        <BookingType
          bookingTypes={bookingTypes}
          selectedBookingType={selectedBookingType}
          onBookingTypeSelected={handleBookingTypeSelected}
        />
        <br />
        <Courts
          courts={courts}
          selectedCourt={selectedCourt}
          onCourtSelected={handleCourtSelected}
        />
        <br />
        <DaysOfWeek
          daysOfWeek={daysOfWeek}
          selectedDayOfWeek={selectedDayOfWeek}
          onDayOfWeekSelected={handleDayOfWeekSelected}
        />
        <br />
        <StartTimes
          startTimes={startTimes}
          selectedStartTime={selectedStartTime}
          onStartTimeSelected={handleStartTimeSelected}
        />
        <br />
        <Durations
          durations={durations}
          selectedDuration={selectedDuration}
          onDurationSelected={handleDurationSelected}
        />
        <br />
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </PageLayout>
  );
};

export default BookingForm;
