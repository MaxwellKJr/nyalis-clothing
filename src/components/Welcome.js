import React from "react";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="container">
        <div className="welcome-content">
          <h1 className="large">
            Flossy's Clothing. Elegant. Cheap Modern Wear
          </h1>
          <p>
            Buy and donate clothes with the purpose of{" "}
            <span className="highlight">feeding</span>,{" "}
            <span className="highlight">dressing</span> &{" "}
            <span className="highlight">saving</span> children in Africa and
            Midland Asia!
          </p>
          <button className="button-solid">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
