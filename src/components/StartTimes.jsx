import Button from "react-bootstrap/Button";

const StartTimes = ({ startTimes }) => {
  const handleClick = (event) => {
    console.log(`Clicked ${event.target.value}`);
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
