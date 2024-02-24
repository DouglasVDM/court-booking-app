import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const BookingType = ({ bookingTypes, onBookingTypeSelected }) => {
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
    <Form.Select
      aria-label="Select booking type"
      size="lg"
      onClick={handleClick}
    >
      <option>Select booking type</option>
      {bookingTypes.map(({ booking_type_id, booking_type_name }) => (
        <option value={booking_type_name} key={booking_type_id}>
          {booking_type_name}
        </option>
      ))}
    </Form.Select>
  );
};

BookingType.propTypes = {
  bookingTypes: PropTypes.arrayOf(
    PropTypes.shape({
      booking_type_id: PropTypes.number.isRequired,
      booking_type_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookingTypeSelected: PropTypes.func.isRequired,
};

export default BookingType;
