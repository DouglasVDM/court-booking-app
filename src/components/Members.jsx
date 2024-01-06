import Form from "react-bootstrap/Form";

const Members = ({ members, onMemberSelected }) => {
  const handleClick = (event) => {
    const selectedMember = members.find(
      (member) => member.member_id === parseInt(event.target.value));

    console.log("selectedMember", selectedMember.member_id);
    onMemberSelected(selectedMember);
  };

  return (
    <>
      <h1>Select Member</h1>
      <Form.Select onClick={handleClick}>
        <option>Click here to select</option>
        {members.map(({ member_id, first_name }) => (
          <option value={member_id} key={member_id}>
            {first_name}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default Members;
