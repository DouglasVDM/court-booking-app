import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Bookings = ({ bookings, courts }) => {
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

export default Bookings;
