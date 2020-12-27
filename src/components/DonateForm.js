import React from "react";
import "./css/DonateForm.css";

const DonateForm = () => {
  return (
    <div className="donation-form">
      <div className="container">
        <h1>Take a moment & donate</h1>
        <form method="POST">
          <input
            type="text"
            name="username"
            placeholder="Enter name"
            required
          />
          <br />
          <input
            type="email"
            name="useremail"
            placeholder="Enter email"
            required
          />{" "}
          <br />
          <input
            type="number"
            name="donationAmount"
            placeholder="Amount to donate (in Kwacha):"
            min="50"
            required
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />{" "}
          <br />
          <button className="button-solid" type="submit" name="subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
