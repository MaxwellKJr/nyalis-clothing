import React from "react";
import "./css/DonateForm.css";

const DonateForm = () => {
  return (
    <form method="POST" className="donation-form">
      <div className="container">
        <h1
          style={{ color: "#fff", fontSize: "2.7rem", marginBottom: "1.5rem" }}
        >
          Become a member
        </h1>
        <form>
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
    </form>
  );
};

export default DonateForm;
