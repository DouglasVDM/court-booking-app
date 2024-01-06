import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

import BookingType from "./BookingType";
import Courts from "./Courts";
import DaysOfWeek from "./DaysOfWeek";
import StartTimes from "./StartTimes";
import Durations from "./Durations";
import Members from "./Members";

const BookingForm = ({
  courts,
  daysOfWeek,
  startTimes,
  durations,
  bookingTypes,
  members,
}) => {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedBookingType, setSelectedBookingType] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

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
  const handleMemberSelected = (member) => {
    setSelectedMember(member);
  };

  const handleSubmit = async () => {
    const bookingFormData = {
      court_name: selectedCourt ? selectedCourt.court_name : null,
      member_id: selectedMember ? selectedMember.member_id : null,
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
    } catch (err) {
      console.error("Error creating booking", err.message);
    }
  };

  return (
    <>
      <Members
        members={members}
        selectedMember={selectedMember}
        onMemberSelected={handleMemberSelected}
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
      <BookingType
        bookingTypes={bookingTypes}
        selectedBookingType={selectedBookingType}
        onBookingTypeSelected={handleBookingTypeSelected}
      />
      <br />
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

BookingForm.propTypes = {
  courts: PropTypes.array.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
  startTimes: PropTypes.array.isRequired,
  durations: PropTypes.array.isRequired,
  bookingTypes: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
};

export default BookingForm;
