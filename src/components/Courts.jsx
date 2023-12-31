import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Courts = ({ courts, onCourtSelected }) => {
  const handleClick = (event) => {
    const selectedCourt = courts.find(
      (court) => court.court_id === parseInt(event.target.value)
    );

    console.log("selectedCourt", selectedCourt.court_name);
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

Courts.propTypes = {
  courts: PropTypes.arrayOf(
    PropTypes.shape({
      court_id: PropTypes.number.isRequired,
      court_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCourtSelected: PropTypes.func.isRequired,
};

export default Courts;
