import Button from "react-bootstrap/Button";

const DaysOfWeek = ({ daysOfWeek, setDaysOfWeek }) => {

  const handleClick = (event) => {
    const selectedDayOfWeek = daysOfWeek.filter((day)=> day.day_name===event.target.value);
    setDaysOfWeek(selectedDayOfWeek);
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
