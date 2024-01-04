import Button from "react-bootstrap/Button";

const StartTimes = ({ startTimes, setStartTimes }) => {
  const handleClick = (event) => {
    const selectedStartTime = startTimes.filter(
      (time) => time.start_time === event.target.value
    );
    setStartTimes(selectedStartTime);
    selectedStartTime;
  };

  return (
    <>
      <h1>Select start time</h1>
      {startTimes.map(({ start_time_id, start_time }) => (
        <Button onClick={handleClick} value={start_time} key={start_time_id}>
          {start_time}
        </Button>
      ))}
    </>
  );
};

export default StartTimes;
