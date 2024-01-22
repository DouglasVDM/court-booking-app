import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/bookings",
      },
    });
  };

  return <Button onClick={handleLogin}>Log In</Button>;
};

export default LoginButton;
