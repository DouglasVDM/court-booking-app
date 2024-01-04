import Button from "react-bootstrap/Button";

const Durations = ({ durations, setDurations }) => {
  const handleClick = (event) => {
    const selectedDuration = durations.filter(
      (duration) => duration.duration_hours === parseInt(event.target.value)
    );
    setDurations(selectedDuration);
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
