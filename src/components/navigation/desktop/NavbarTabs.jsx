import { useAuth0 } from "@auth0/auth0-react";
import NavbarTab from "./NavbarTab";

const NavbarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="m-4">      
      {isAuthenticated && (
        <header>
          <NavbarTab path="/bookings" label="All bookings" />
          <br />
          <NavbarTab path="/booking-form" label="Book a court" />
        </header>
      )}
    </div>
  );
};

export default NavbarTabs;
