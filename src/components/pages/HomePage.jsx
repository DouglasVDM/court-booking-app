import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../buttons/LoginButton";
import SignupButton from "../buttons/SignupButton";

const HomePage = () => {
  const { isAuhenticated, user } = useAuth0();

  return (
    <div className="m-4">
      <h1>Court Booking App</h1>
      {!isAuhenticated ? (
        <div>
          Sorry, you're not authenticated :'( <LoginButton />
        </div>
      ) : (
        <div>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
