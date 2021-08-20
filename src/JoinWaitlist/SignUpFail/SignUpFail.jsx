import React from "react";
import "./SignUpFail.css";

function SignUpFail({ setComponent }) {
  return (
    <div className="signUpFail__container">
      <h1 className="signUpFail__header">
        Sorry!! Something went wrong. Please Try Again.
      </h1>
      <button
        className="joinWaitlist__submitBtn signUpFail__btn"
        onClick={() => setComponent("login")}
      >
        Try Again
      </button>
    </div>
  );
}

export default SignUpFail;
