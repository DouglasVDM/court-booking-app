import Form from "react-bootstrap/Form";

const BookingType = ({
  bookingTypes,
  selectedBookingType,
  onBookingTypeSelected,
}) => {
  const handleClick = (event) => {
    `Clicked ${event.target.value}`;
    const selectedBookingType = bookingTypes.find(
      (type) => type.booking_type_name === event.target.value
    );
    console.log("selectedBookingType:", selectedBookingType.booking_type_name);

    // Call the callback function to pass the selected booking type
    onBookingTypeSelected(selectedBookingType);
  };

  return (
    <>
      <h1>Select booking type</h1>
      <Form.Select onClick={handleClick}>
        <option>Click here to select</option>
        {bookingTypes.map(({ booking_type_id, booking_type_name }) => (
          <option value={booking_type_name} key={booking_type_id}>
            {booking_type_name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default BookingType;
