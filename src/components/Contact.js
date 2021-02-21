import React from "react";
import Socials from "./Socials";
import "./css/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="subscribe">
          <h2>Why should you subscribe?</h2>
          <p>
            We believe everyone wants quality clothes yet affordable at the same
            time and that is why we created this platform.
          </p>
          <p>
            Have the audacity of looking good knowing that you are also doing
            someone else good.
          </p>
          <p>Perks include:</p>
          <ul>
            <li>
              Great, amazing and <span className="highlight">affordable</span>{" "}
              clothes
            </li>
            <li>Get notified of what's available anytime and anywhere</li>
            <li>Donate and see what others are donating</li>
            <li>
              You get to <span className="highlight">feed</span>,{" "}
              <span className="highlight">dress</span> and{" "}
              <span className="highlight">educate</span> children across Africa
              and Asia
            </li>
          </ul>
        </div>

        <form className="contact-form">
          <input
            type="email"
            name="email"
            placeholder="Subscribe to our newsletter"
          />
          <button className="button-solid" name="submit">
            Subscribe
          </button>
        </form>

        <Socials />
      </div>
    </section>
  );
}

export default Contact;
