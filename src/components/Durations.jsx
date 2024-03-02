import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Durations = ({ durations, onDurationSelected }) => {
  const handleClick = (event) => {
    const selectedDuration = durations.find(
      (duration) => duration.duration_hours === parseInt(event.target.value)
    );

    onDurationSelected(selectedDuration);
  };

  return (
    <Form.Select
      aria-label="Select duration in hours"
      size="lg"
      onClick={handleClick}
    >
      <option>Select duration</option>
      {durations.map(({ duration_id, duration_hours }) => (
        <option value={duration_hours} key={duration_id}>
          {duration_hours}h
        </option>
      ))}
    </Form.Select>
  );
};

Durations.propTypes = {
  durations: PropTypes.arrayOf(
    PropTypes.shape({
      duration_id: PropTypes.number.isRequired,
      duration_hours: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDurationSelected: PropTypes.func.isRequired,
};

export default Durations;
