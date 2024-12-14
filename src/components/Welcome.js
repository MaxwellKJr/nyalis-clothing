import React from "react";
import { Link } from "react-router-dom";

import "./css/Welcome.css";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="container">
        <div className="welcome-content">
          <h1 className="large">
            Nyali's Clothing. Elegant. Cheap Modern Wear
          </h1>
          <p>
            Buy and donate clothes with the purpose of{" "}
            <span className="highlight">feeding</span>,{" "}
            <span className="highlight">dressing</span> &{" "}
            <span className="highlight">saving</span> children in Africa and
            Midland Asia!
          </p>
          <div className="buttons">
            <a href="/#contact" className="button-solid">
              Subscribe
            </a>

            <Link to="/donate" className="button-solid">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
