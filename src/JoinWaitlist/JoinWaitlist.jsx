import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./JoinWaitlist.css";
import logo from "./../assets/logo.png";
import leftArrow from "./../assets/left-arrow.svg";

function JoinWaitlist() {
  let history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setUserData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    history.push("/");
  };

  return (
    <div className="joinWaitlist__container">
      <div className="joinWaitlist__topContainer">
        <div className="joinWaitlist__topContainerLeft">
          <div className="joinWaitlist__textContent">
            <Link to="/">
              <button className="joinWaitlist__leftArrow">
                <img src={leftArrow} alt="" />
              </button>
            </Link>
            <h1 className="joinWaitlist__textContentHeader">
              Join in under 2 minutes
            </h1>
            <p>
              Once you’re in, you’ll get a sneak peek into your spends since
              2020.
            </p>
          </div>
          <form action="" className="joinWaitlist__form">
            <input
              type="text"
              placeholder="FULL NAME"
              className="joinWaitlist__input"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="joinWaitlist__input"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="MOBILE NO"
              className="joinWaitlist__input"
              name="mobile"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="joinWaitlist__submitBtn"
              onClick={handleSubmit}
            >
              Join Waitlist
            </button>
          </form>
        </div>
        <div className="joinWaitlist__topContainerRight">
          <img className="joinWaitlist__logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default JoinWaitlist;
