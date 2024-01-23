import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogoutButton;
