import React from "react";
import { Link } from "react-router-dom";
import navLogo from "./../assets/nav-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img className="navbar__logo" src={navLogo} alt="" />
          </Link>
          <Link to="/join-waitlist">
            <button
              className="btn btn-outline-success navbar__getEarlyAccessButton"
              type="submit"
            >
              Get Early Access
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
