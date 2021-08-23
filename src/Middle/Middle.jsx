import React from "react";
import { Link } from "react-router-dom";
import "./Middle.css";

function Middle() {
  return (
    <div className="middle__container">
      <div className="middle__leftContainer">
        <div className="middle__heading">
          Join our wait list to get early access to the app <span className="brandName">SayF</span>
        </div>
        <div className="middle__subHeading">
          SayF is a personal finance app that helps you save, invest and
          optimize your spending for a better future
        </div>
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
