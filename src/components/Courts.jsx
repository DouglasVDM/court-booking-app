import Form from "react-bootstrap/Form";

const Courts = ({ courts, onCourtSelected }) => {
  const handleClick = (event) => {
    const selectedCourt = courts.find(
      (court) => court.court_name === event.target.value
    );
    selectedCourt;

    console.log("selectedCourt", selectedCourt);
    onCourtSelected(selectedCourt);
  };

  return (
    <>
      <h1>Select Court</h1>
      <Form.Select size="lg" onClick={handleClick}>
        ,<option>Open this select menu</option>
        {courts.map(({ court_id, court_name }) => (
          <option value={court_name} key={court_id}>
            {court_name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default Courts;
