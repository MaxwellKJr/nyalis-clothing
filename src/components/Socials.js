import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
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
          <FontAwesomeIcon
            className="social-link-icon fa-2x"
            icon={faTwitter}
          />
        </a>
        <a
          href="https://facebook.com/maxwelljr.kapezi"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On Facebook"
        >
          <FontAwesomeIcon
            className="social-link-icon fa-2x"
            icon={faFacebook}
          />
        </a>
        <a
          href="https://instagram.com/_maxwellkjr"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On IG"
        >
          <FontAwesomeIcon
            className="social-link-icon fa-2x"
            icon={faInstagram}
          />
        </a>
        <a
          href="https://wa.me/265992800255"
          className="social-link"
          target="_blank"
          rel="noreferrer"
          title="On WhatsApp"
        >
          <FontAwesomeIcon
            className="social-link-icon fa-2x"
            icon={faWhatsapp}
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
