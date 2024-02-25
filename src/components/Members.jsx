import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

const Members = ({ members, onMemberSelected }) => {
  const { user } = useAuth0();

  return (
    <>
      <Form.Group md="4" controlId="validationCustom01">
        <Form.Label>Member</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder={user.name}
          defaultValue={user.name}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
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
