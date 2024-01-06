import Button from "react-bootstrap/Button";

const DaysOfWeek = ({ daysOfWeek, selectedDayOfWeek, onDayOfWeekSelected }) => {
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
      {!selectedDayOfWeek ? (
        daysOfWeek.map(({ day_id, day_name }) => (
          <Button onClick={handleClick} value={day_name} key={day_id}>
            {day_name}
          </Button>
        ))
      ) : (
        <p>Selected day of week: {selectedDayOfWeek.day_name}</p>
      )}
    </>
  );
};

export default DaysOfWeek;
