import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

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
  const { register, handleSubmit } = useForm();

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

  // const onSubmit = async (event) => {
  //   event.preventDefault()
  //   const bookingFormData = {
  //     court_id: event.target.value,
  //     member_id: selectedMember ? selectedMember.member_id : null,
  //     booked_at: new Date().toISOString(),
  //     day_name: selectedDayOfWeek ? selectedDayOfWeek.day_name : null,
  //     start_time: selectedStartTime ? selectedStartTime.start_time : null,
  //     duration_hours: selectedDuration ? selectedDuration.duration_hours : null,
  //     booking_type_name: selectedBookingType
  //       ? selectedBookingType.booking_type_name
  //       : null,
  //   };

  //   try {
  //     const bookingResponse = await axios.post("/", bookingFormData);
  //     console.log("Booking created:", bookingResponse.data);
  //   } catch (err) {
  //     console.error("Error creating booking", err.message);
  //   }
  // };

  return (
    <>
      {!selectedMember ? (
        <Members members={members} onMemberSelected={handleMemberSelected} />
      ) : (
        selectedMember.first_name
      )}
      <br />
      <br />
        <Courts courts={courts} onCourtSelected={handleCourtSelected} />
      <br />
      <br />
      <DaysOfWeek
        daysOfWeek={daysOfWeek}
        selectedDayOfWeek={selectedDayOfWeek}
        onDayOfWeekSelected={handleDayOfWeekSelected}
      />
      <br />
      <br />
      <StartTimes
        startTimes={startTimes}
        selectedStartTime={selectedStartTime}
        onStartTimeSelected={handleStartTimeSelected}
      />
      <br />
      <br />
      <Durations
        durations={durations}
        selectedDuration={selectedDuration}
        onDurationSelected={handleDurationSelected}
      />
      <br />
      <br />
      <BookingType
        bookingTypes={bookingTypes}
        selectedBookingType={selectedBookingType}
        setBookingType={setSelectedBookingType}
        onBookingTypeSelected={handleBookingTypeSelected}
      />
      <br />
    </>
  );
};

export default BookingForm;
