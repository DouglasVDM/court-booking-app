import Button from "react-bootstrap/Button";

const DaysOfWeek = ({ daysOfWeek }) => {

  const handleClick = (event) => {
    console.log(`Clicked ${event.target.value}`);
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
