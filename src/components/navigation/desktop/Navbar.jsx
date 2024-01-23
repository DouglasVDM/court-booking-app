import NavbarButtons from "./NavbarButtons";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavbarTabs />
        <NavbarButtons />
      </nav>
    </div>
  );
};

export default Navbar;
