import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div
        className="links"
      >
        <Link to="/">HOME</Link>&nbsp;
        <Link to="packages">PACKAGES</Link>
        <Link to="about">ABOUT</Link>
        <Link to="contact">CONTACT</Link>{" "}
      </div>
    </nav>
  );
};

export default Nav;
