import Form from "react-bootstrap/Form";

const Courts = ({ courts, onCourtSelected }) => {
  const handleClick = (event) => {
    const selectedCourt = courts.find(
      (court) => court.court_id === parseInt(event.target.value)
    );
    // selectedCourt;

    console.log("selectedCourt", selectedCourt.court_id);
    onCourtSelected(selectedCourt);
  };

  return (
    <>
      <h1>Select Court</h1>
      <Form.Select size="lg" onClick={handleClick}>
        ,<option>Click here to select</option>
        {courts.map(({ court_id, court_name }) => (
          <option value={court_id} key={court_id}>
            {court_name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default Courts;
