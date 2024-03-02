import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const DaysOfWeek = ({ daysOfWeek, onDayOfWeekSelected }) => {
  const handleClick = (event) => {
    const selectedDayOfWeek = daysOfWeek.find(
      (day) => day.day_name === event.target.value
    );

    onDayOfWeekSelected(selectedDayOfWeek);
  };

  return (
    <Form.Select aria-label="Select the day of the week" size="lg" onClick={handleClick}>
      <option>Select day</option>
      {daysOfWeek.map(({ day_id, day_name }) => (
        <option value={day_name} key={day_id}>
          {day_name}
        </option>
      ))}
    </Form.Select>
  );
};

DaysOfWeek.propTypes = {
  daysOfWeek: PropTypes.arrayOf(
    PropTypes.shape({
      day_id: PropTypes.number.isRequired,
      day_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDayOfWeekSelected: PropTypes.func.isRequired,
};

export default DaysOfWeek;
