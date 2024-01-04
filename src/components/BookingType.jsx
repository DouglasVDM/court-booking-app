import Button from "react-bootstrap/Button";

const BookingType = ({ bookingTypes, onBookingTypeSelected }) => {
  const handleClick = (event) => {
    `Clicked ${event.target.value}`;
    const selectedBookingType = bookingTypes.find(
      (type) => type.booking_type_name === event.target.value
    );
    console.log("selectedBookingType", selectedBookingType);

    // Call the callback function to pass the selected booking type
    onBookingTypeSelected(selectedBookingType);
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
