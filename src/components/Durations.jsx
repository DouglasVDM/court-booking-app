import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Durations = ({ durations, onDurationSelected }) => {
  const handleClick = (event) => {
    const selectedDuration = durations.find(
      (duration) => duration.duration_hours === parseInt(event.target.value)
    );

    console.log("selectedDuration:", `${selectedDuration.duration_hours}h`);
    onDurationSelected(selectedDuration);
  };

  return (
    <>
      <h1>Select duration of session</h1>
      <Form.Select onClick={handleClick}>
        <option>Click here to select</option>
        {durations.map(({ duration_id, duration_hours }) => (
          <option value={duration_hours} key={duration_id}>
            {duration_hours}h
          </option>
        ))}
      </Form.Select>
    </>
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
