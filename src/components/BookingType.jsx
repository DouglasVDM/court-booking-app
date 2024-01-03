import Button from "react-bootstrap/Button";

const BookingType = ({ bookingTypes }) => {
  const handleClick = (event) => {
    console.log(`Clicked ${event.target.value}`);
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
