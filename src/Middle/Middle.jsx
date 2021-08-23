import React from "react";
import { Link } from "react-router-dom";
import "./Middle.css";

function Middle() {
  return (
    <div className="middle__container">
      <div className="middle__leftContainer">
        <h1 className="middle__heading">
          Join our wait list to get early access to the app SayF
        </h1>
        <h2 className="middle__subHeading">
          SayF is a personal finance app that helps you save, invest and
          optimize your spending for a better future
        </h2>
        <Link to="/join-waitlist">
          <button
            className="btn btn-outline-success middle__getEarlyAccessButton"
            type="submit"
          >
            Get Early Access
          </button>
        </Link>
      </div>
      <div className="middle__rightContainer"></div>
    </div>
  );
}

export default Middle;
