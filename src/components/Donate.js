import React from "react";
import "./css/DonateForm.css";

const DonateForm = () => {
  return (
    <form action="GET" className="donation-form">
      <div className="container">
        <input type="text" name="username" required />
        <br />
        <input type="email" name="useremail" required /> <br />
        <input type="password" name="password" required /> <br />
        <button type="submit" name="subscribe">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default DonateForm;
