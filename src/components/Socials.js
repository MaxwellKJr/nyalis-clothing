import React from "react";
import "./css/Socials.css";

const Socials = () => {
  return (
    <div id="social-links">
      <h2>Follow Us</h2>
      <div className="social-links grid-4">
        <a
          href="https://twitter.com/maxwellKJr"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On Twitter"
        >
          <i className="fab fa-twitter fa-2x social-link-icon"></i>
        </a>
        <a
          href="https://facebook.com/maxwelljr.kapezi"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On Facebook"
        >
          <i className="fab fa-facebook fa-2x social-link-icon"></i>
        </a>
        <a
          href="https://instagram.com/_maxwellkjr"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On IG"
        >
          <i className="fab fa-instagram fa-2x social-link-icon"></i>
        </a>
        <a
          href="https://wa.me/265992800255"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On WhatsApp"
        >
          <i className="fab fa-whatsapp fa-2x social-link-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
