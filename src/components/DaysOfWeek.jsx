import Button from "react-bootstrap/Button";

const DaysOfWeek = ({ daysOfWeek, onDayOfWeekSelected }) => {
  const handleClick = (event) => {
    const selectedDayOfWeek = daysOfWeek.find(
      (day) => day.day_name === event.target.value
    );

    console.log("selectedDayOfWeek", selectedDayOfWeek);
    onDayOfWeekSelected(selectedDayOfWeek);
  };

  return (
    <>
      <h1>Select day of the week</h1>
      {daysOfWeek.map(({ day_id, day_name }) => (
        <Button onClick={handleClick} value={day_name} key={day_id}>
          {day_name}
        </Button>
      ))}
    </>
  );
};

export default DaysOfWeek;
