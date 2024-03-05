import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const StartTimes = ({ startTimes, onStartTimeSelected }) => {
  const handleChange = (event) => {
    const startTime = startTimes.find(
      (time) => time.start_time === event.target.value
    );

    onStartTimeSelected(startTime);
  };
  ``;
  return (
    <Form.Select
      aria-label="Select start time"
      size="lg"
      onClick={handleChange}
    >
      <option>Select start time</option>
      {startTimes.map(({ start_time_id, start_time }) => (
        <option value={start_time} key={start_time_id}>
          {start_time}
        </option>
      ))}
    </Form.Select>
  );
};

StartTimes.propTypes = {
  startTimes: PropTypes.arrayOf(
    PropTypes.shape({
      start_time_id: PropTypes.number.isRequired,
      start_time: PropTypes.string.isRequired,
    })
  ).isRequired,
  onStartTimeSelected: PropTypes.func.isRequired,
};

export default StartTimes;
