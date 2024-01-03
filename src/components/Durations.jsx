import Button from "react-bootstrap/Button";

const Durations = ({ durations }) => {
  const handleClick = (event) => {
    console.log(`Clicked ${event.target.value}`);
  };

  return (
    <>
      <h1>Select duration of session</h1>
      {durations.map(({ duration_id, duration_hours }) => (
        <Button onClick={handleClick} value={duration_hours} key={duration_id}>
          {duration_hours}h
        </Button>
      ))}
    </>
  );
};

export default Durations;
