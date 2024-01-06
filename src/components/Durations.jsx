import Form from "react-bootstrap/Form";

const Durations = ({ durations, selectedDuration, onDurationSelected }) => {
  const handleClick = (event) => {
    const selectedDuration = durations.find(
      (duration) => duration.duration_hours === parseInt(event.target.value)
    );

    console.log("selectedDuration:", `${selectedDuration.duration_hours}h`);
    onDurationSelected(selectedDuration);
  };

  return (
    <>
      <h1>Select duration of session</h1>
      <Form.Select onClick={handleClick}>
      <option>Click here to select</option>
        {durations.map(({ duration_id, duration_hours }) => (
          <option value={duration_hours} key={duration_id}>
            {duration_hours}h
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default Durations;
