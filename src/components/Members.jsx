import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const Members = ({ members, onMemberSelected }) => {
  const handleClick = (event) => {
    const selectedMember = members.find(
      (member) => member.member_id === parseInt(event.target.value)
    );

    console.log("selectedMember", selectedMember.member_id);
    onMemberSelected(selectedMember);
  };

  return (
    <Form.Select aria-label="Select member" size="lg" onClick={handleClick}>
      <option>Select member</option>
      {members.map(({ member_id, first_name }) => (
        <option value={member_id} key={member_id}>
          {first_name}
        </option>
      ))}
    </Form.Select>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      member_id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onMemberSelected: PropTypes.func.isRequired,
};

export default Members;
