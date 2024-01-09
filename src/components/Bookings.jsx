import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Bookings = ({ bookings }) => {
  return (
    <div className="m-4">
      {bookings.map(
        ({
          booking_id,
          court_name,
          member_id,
          formatted_booked_at,
          day_name,
          formatted_start_time,
          duration_hours,
          booking_type_name,
        }) => (
          <Card className="mt-4" key={booking_id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{court_name}</Card.Title>
              <ul>
                <li>Booked by: {member_id}</li>
                <li>Created at: {formatted_booked_at}</li>
                <li>Booking day: {day_name}</li>
                <li>Starting at: {formatted_start_time}</li>
                <li>Duration: {duration_hours} hour/s</li>
                <li>Match type: {booking_type_name}</li>
              </ul>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
};

Bookings.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      booking_id: PropTypes.number.isRequired,
      court_name: PropTypes.string.isRequired,
      member_id: PropTypes.number.isRequired,
      formatted_booked_at: PropTypes.string.isRequired,
      day_name: PropTypes.string.isRequired,
      formatted_start_time: PropTypes.string.isRequired,
      duration_hours: PropTypes.number.isRequired,
      booking_type_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Bookings;
