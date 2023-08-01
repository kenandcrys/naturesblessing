import React from "react";
import { Link } from "react-router-dom";

const style= { textDecoration: "none", color: "purple", border: "2px solid grey", borderRadius: "5px", backgroundColor: "lightpink", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)"};

const Nav = () => {
    return (
        <nav className='nav-bar'>
      <Link style={style} to="/about">About</Link>
      <Link style={style} to="/">Home</Link>
      <Link style={style} to="/Packages">Packages</Link>
      <Link style={style} to="/contact">Contact</Link>
      </nav>
    );
}

export default Nav;