import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";

const Members = () => {
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

export default Members;
