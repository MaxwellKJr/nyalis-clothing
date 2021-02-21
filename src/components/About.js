import React from "react";
import Vision from "../images/vision.jpg";
import "./css/About.css";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="grid-2">
          <img src={Vision} alt="" />
          <div className="about-content">
            <h1>Our Vision & Purpose</h1>

            <p>
              Here at <span className="highlight">Flossy's Clothing</span> we
              fight against things that affect most children in Africa and parts
              of Asia in anyway we see best.
            </p>

            <h1>How do we do this?</h1>
            <p>
              We do not need to have large amounts of money coming our way by
              over pricing our commodities, that is why we decided to create a
              platform for <span className="highlight">everyone</span> and
              <span className="highlight">anyone</span> to contribue the little
              they have.
            </p>
            <p>
              Help us in fighting for the child's rights and well-being by
              <span className="highlight">buying</span> and/or
              <span className="highlight">donating</span> from/to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
