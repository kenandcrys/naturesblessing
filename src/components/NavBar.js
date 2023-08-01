import React, { useState } from "react";
import { Link } from "react-router-dom";


const style = {
  textDecoration: "none",
  color: 'black',
  border: "2px solid grey",
  borderRadius: "15px",
  backgroundColor: "lightgreen",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
  padding: "5px 5px",
  display: "block",
  
};

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  return (
    <nav className="nav-bar">
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <Link style={style} to="/">
          Packages
        </Link>
        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              padding: "10px",
              zIndex: 999,
            }}
          >
            <Link to="/Packages/Bronze" style={style}>
              Bronze Package
            </Link>
            <Link to="/Packages/Silver" style={style}>
              Silver Package
            </Link>
            <Link to="/Packages/Gold" style={style}>
              Gold Package
            </Link>
            <Link to="/Packages/Platinum" style={style}>
              Platinum Package
            </Link>
          </div>
        )}
      </div>
      <Link style={style} to="/about">
        About
      </Link>
      <Link style={style} to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
