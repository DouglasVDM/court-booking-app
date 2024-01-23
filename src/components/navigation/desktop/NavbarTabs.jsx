import { useAuth0 } from "@auth0/auth0-react";
import NavbarTab from "./NavbarTab";

const NavbarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="m-4">
      <NavbarTab path="/profile" label="Profile" />
      <br />
      <NavbarTab path="/public" label="Public" />
      <br />
      <br />
      {isAuthenticated && (
        <>
          <NavbarTab path="/bookings" label="All bookings" />
          <br />
          <NavbarTab path="/booking-form" label="Book a court" />
          <br />
          <NavbarTab path="/protected" label="Protected" />
          <br />
          <NavbarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};

export default NavbarTabs;
