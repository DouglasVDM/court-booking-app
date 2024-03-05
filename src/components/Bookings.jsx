import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import PageLayout from "./PageLayout";

const Bookings = ({ bookings }) => {
  return (
    <PageLayout>
      <div className="m-4">
        <h1>All Bookings</h1>
        {bookings.map(
          ({
            booking_id,
            court_name,
            member_name,
            formatted_booked_at,
            day_name,
            formatted_start_time,
            duration_hours,
            booking_type_name,
          }) => (
            <Card className="m-4" key={booking_id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{court_name}</Card.Title>
                <ul>
                  <li>Member: {member_name}</li>
                  <li>Will be playing: {booking_type_name}</li>
                  <li>On: {day_name}</li>
                  <li>Starting at: {formatted_start_time}</li>
                  <li>For: {duration_hours} hour/s</li>
                  <li>Booking created at: {formatted_booked_at}</li>
                </ul>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </PageLayout>
  );
};

Bookings.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      booking_id: PropTypes.number.isRequired,
      court_name: PropTypes.string.isRequired,
      member_name: PropTypes.string.isRequired,
      formatted_booked_at: PropTypes.string.isRequired,
      day_name: PropTypes.string.isRequired,
      formatted_start_time: PropTypes.string.isRequired,
      duration_hours: PropTypes.number.isRequired,
      booking_type_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Bookings;
