import Button from "react-bootstrap/Button";

const BookingType = ({ bookingTypes, setBookingTypes }) => {
  const handleClick = (event) => {
    (`Clicked ${event.target.value}`);
    const selectedBookingType = bookingTypes.filter(
      (type) => type.booking_type_name === event.target.value
    );
    setBookingTypes(selectedBookingType);
  };

  return (
    <>
      <h1>Select booking type</h1>
      {bookingTypes.map(({ booking_type_id, booking_type_name }) => (
        <Button
          onClick={handleClick}
          value={booking_type_name}
          key={booking_type_id}
        >
          {booking_type_name}
        </Button>
      ))}
    </>
  );
};

export default BookingType;
