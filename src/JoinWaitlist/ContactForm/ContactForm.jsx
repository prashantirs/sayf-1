import axios from "axios";
import React from "react";
import useFormValidator from "use-form-input-validator";
import "./ContactForm.css";

function ContactForm({ setComponent }) {
  const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    name: {
      value: "", // defuallt changes
      checks: "required", // checks to run on the field on change
    },
    email: {
      value: "", // defuallt changes
      checks: "required|email", // checks to run on the field on change
    },
    mobile: {
      value: "", // defuallt changes
      validate: (value) => {
        if (value.match(/^[0-9]+$/) == null) return "Invalid Mobile Number";
      },
      checks: "required|num|min:10|max:10", // checks to run on the field on change
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, email, mobile } = values;

  //   const res = await fetch(`http://localhost:8000/join-waitlist`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, mobile }),
  //   });

  //   const data = await res.json();

  //   if (data.staus === 200) setComponent("success");
  //   else setComponent("fail");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAllFieldsValid()) {
      // get values easily
      const { name, email, mobile } = values;
      const data = { name, email, mobile };
      const parsedData = JSON.stringify(data);
      axios
        .post(
          `https://radiant-brushlands-76905.herokuapp.com/join-waitlist?name=${name}&email=${email}&mobile=${mobile}`,
          {
            body: parsedData,
          }
        )
        .then((response) => {
          if (response.status === 200) setComponent("success");
          else setComponent("fail");
        });
    }
  };
  return (
    <>
      <div className="joinWaitlist__textContent">
        <h1 className="joinWaitlist__textContentHeader">
          Join in under 2 minutes
        </h1>
        <p>
          Our beta members play an important role in helping us shape SayF. As
          we get close to launch SayF, we will soon share you the info on how
          you can get involved.
        </p>
      </div>
      <form
        // action="http://localhost:8000/testing"
        method="POST"
        className="joinWaitlist__form"
      >
        <input
          type="text"
          placeholder="FULL NAME"
          className="joinWaitlist__input"
          name="name"
          onChange={updateField}
        />
        <small className="joinWaitlist__error">{errors.name}</small>
        <input
          type="email"
          placeholder="EMAIL"
          className="joinWaitlist__input"
          name="email"
          onChange={updateField}
        />
        <small className="joinWaitlist__error">{errors.email}</small>
        <input
          type="text"
          placeholder="MOBILE NO"
          className="joinWaitlist__input"
          name="mobile"
          onChange={updateField}
        />
        <small className="joinWaitlist__error">{errors.mobile}</small>
        <button
          type="submit"
          className="joinWaitlist__submitBtn"
          onClick={handleSubmit}
        >
          Join Waitlist
        </button>
      </form>
    </>
  );
}

export default ContactForm;
