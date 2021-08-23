import React from "react";
import Footer from "../../Footer/Footer";
import "./SignUpSuccess.css";

function SignUpSuccess() {
  return (
    <div className="signUpSuccess__container">
      <h1 className="signUpSuccess__header">
        Congratulations you've successfully registered for early access.
      </h1>
      <h2 className="signUpSuccess__subHeader">We'll Contact you soon.</h2>
      <div className="signUpSuccessHeader">
        <Footer />
      </div>
    </div>
  );
}

export default SignUpSuccess;
