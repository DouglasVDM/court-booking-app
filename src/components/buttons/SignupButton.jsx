import { useAuth0 } from "@auth0/auth0-react";
import {Button} from 'react-bootstrap'

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/Home",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Button onClick={handleSignUp}>
      Sign Up
    </Button>
  );
};

export default SignupButton;