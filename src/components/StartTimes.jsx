import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const StartTimes = ({ startTimes, onStartTimeSelected }) => {
  const handleClick = (event) => {
    const selectedStartTime = startTimes.find(
      (time) => time.start_time === event.target.value
    );

    console.log("selectedStartTime", selectedStartTime.start_time);
    onStartTimeSelected(selectedStartTime);
  };

  return (
    <>
      <h1>Select start time</h1>
      <Form.Select onClick={handleClick}>
        <option>Click here to select</option>
        {startTimes.map(({ start_time_id, start_time }) => (
          <option value={start_time} key={start_time_id}>
            {start_time}
          </option>
        ))}
      </Form.Select>
    </>
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
