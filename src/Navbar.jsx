import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Math Club</h2>
      <div className="navbar-links">
        <Link to="/events" className="navbar-link">
          Events
        </Link>
        <Link to="/Lessons" className="navbar-link">
          Lessons
        </Link>
        <Link to="/Contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
