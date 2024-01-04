import { useState } from "react";
import Form from "react-bootstrap/Form";
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

  return (
    <>
      <Members members={members} onMemberSelected={handleMemberSelected} />
      <br />
      <br />
      <Courts courts={courts} onCourtSelected={handleCourtSelected} />
      <br />
      <br />
      <DaysOfWeek
        daysOfWeek={daysOfWeek}
        onDayOfWeekSelected={handleDayOfWeekSelected}
      />
      <br />
      <br />
      <StartTimes
        startTimes={startTimes}
        onStartTimeSelected={handleStartTimeSelected}
      />
      <br />
      <br />
      <Durations
        durations={durations}
        onDurationSelected={handleDurationSelected}
      />
      <br />
      <br />
      <BookingType
        bookingTypes={bookingTypes}
        onBookingTypeSelected={handleBookingTypeSelected}
      />

      <br />
    </>
  );
};

export default BookingForm;
