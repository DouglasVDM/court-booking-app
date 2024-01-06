import Form from "react-bootstrap/Form";

const DaysOfWeek = ({ daysOfWeek, selectedDayOfWeek, onDayOfWeekSelected }) => {
  const handleClick = (event) => {
    const selectedDayOfWeek = daysOfWeek.find(
      (day) => day.day_name === event.target.value
    );

    console.log("selectedDayOfWeek", selectedDayOfWeek.day_name);
    onDayOfWeekSelected(selectedDayOfWeek);
  };

  return (
    <>
      <h1>Select day of the week</h1>
      <Form.Select onClick={handleClick}>
        <option>Click here to select</option>
        {daysOfWeek.map(({ day_id, day_name }) => (
          <option value={day_name} key={day_id}>
            {day_name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default DaysOfWeek;
