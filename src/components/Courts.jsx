import Button from "react-bootstrap/Button";

const Courts = ({ courts }) => {
  const handleClick = (event) => {
    console.log(`Clicked ${event.target.value}`);
  };

  return (
    <>
    <h1>Select Court</h1>
      {courts.map(({ court_id, court_name }) => (
        <Button onClick={handleClick} value={court_name} key={court_id}>
          {court_name}
        </Button>
      ))}
    </>
  );
};

export default Courts;
