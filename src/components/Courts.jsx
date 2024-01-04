import Button from "react-bootstrap/Button";

const Courts = ({ courts, onCourtSelected }) => {
  const handleClick = (event) => {
    const selectedCourt = courts.find((court)=> court.court_name===event.target.value);
    (selectedCourt);

    console.log("selectedCourt",selectedCourt);
    onCourtSelected(selectedCourt);
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
