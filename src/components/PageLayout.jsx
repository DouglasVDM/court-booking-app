import Navbar from "./navigation/desktop/Navbar";
import PageFooter from "./PageFooter";

const PageLayout = ({ children }) => {
  return (
    <div className="m-4">
      <div className="page-layout__content">{children}</div>
      <Navbar />
      <PageFooter />
    </div>
  );
};

export default PageLayout;
