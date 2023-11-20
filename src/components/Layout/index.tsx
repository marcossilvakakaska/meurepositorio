import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <div className="content">{children}</div>
      <FooterComponent />
    </>
  );
};

export default Layout;
