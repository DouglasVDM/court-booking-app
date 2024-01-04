import Button from "react-bootstrap/Button";

const Durations = ({ durations, onDurationSelected }) => {
  const handleClick = (event) => {
    const selectedDuration = durations.find(
      (duration) => duration.duration_hours === parseInt(event.target.value)
    );

    console.log("selectedDuration", selectedDuration);
    onDurationSelected(selectedDuration);
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
