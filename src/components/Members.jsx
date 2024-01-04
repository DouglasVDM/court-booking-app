import Button from "react-bootstrap/Button";

const Members = ({ members, onMemberSelected }) => {
  const handleClick = (event) => {
    const selectedMember = members.find((member)=> member.first_name===event.target.value);
    (selectedMember);

    console.log("selectedMember",selectedMember);
    onMemberSelected(selectedMember);
  };
  
  return (
    <>
    <h1>Select Member</h1>
      {members.map(({ member_id, first_name }) => (
        <Button onClick={handleClick} value={first_name} key={member_id}>
          {first_name}
        </Button>
      ))}
    </>
  );
};

export default Members;
