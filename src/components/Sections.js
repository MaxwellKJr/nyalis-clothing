import React from "react";
import Mens from "../images/mens.jpg";
import Womens from "../images/womens.jpg";
import Boys from "../images/boys.jpg";
import Girls from "../images/girls.jpg";
import Mwear1 from "../images/mwear-1.webp";
import Mwear2 from "../images/mwear-2.jpg";
import Mwear3 from "../images/mwear-3.jpg";
import Wmwear1 from "../images/wmwear-1.jpg";
import Wmwear2 from "../images/wmwear-2.webp";
import Bwear from "../images/boyswear.jpg";
import Vision from "../images/vision.jpg";

const Sections = () => {
  return (
    <main>
      {/* WELCOMING AREA */}
      <section id="welcome">
        <div className="container">
          <div className="welcome-content">
            <h1 className="large">
              Flossy's Clothing. Elegant. Cheap Modern Wear
            </h1>
            <p>
              Buy and donate clothes with the purpose of
              <span className="highlight">feeding</span>,
              <span className="highlight">dressing</span> &
              <span className="highlight">saving</span>
              children in Africa and Midland Asia!
            </p>
          </div>
        </div>
      </section>

      {/*  CATEGORIES SECTION */}
      <section id="categories">
        <div className="container">
          <div className="grid-4">
            <div className="grid-item">
              <a href="#mens">
                <img src={Mens} alt="" />
              </a>
              <div className="content-inner">
                <h2>Men's Wear</h2>
                <p>
                  <a href="#mens" className="highlight">
                    See more
                  </a>{" "}
                  of men's wear that is modern and with an African touch
                </p>
              </div>
            </div>

            <div className="grid-item">
              <a href="#womens">
                <img src={Womens} alt="" />
              </a>
              <div className="content-inner">
                <h2>Women's Wear</h2>
                <p>
                  We also have more clothes for our ladies. Feel free to look at{" "}
                  <a href="#womens" className="highlight">
                    more
                  </a>{" "}
                  of them
                </p>
              </div>
            </div>

            <div className="grid-item">
              <a href="#womens">
                <img src={Boys} alt="" />
              </a>
              <div className="content-inner">
                <h2>Boy's Wear</h2>
                <p>
                  Never forget the little ones. We have a lot in stock for our
                  future men.{" "}
                  <a href="#boys" className="highlight">
                    See more
                  </a>
                </p>
              </div>
            </div>
            <div className="grid-item">
              <a href="#womens">
                <img src={Girls} alt="" />
              </a>
              <div className="content-inner">
                <h2>Girl's Wear</h2>
                <p>
                  As a way of promoting gender equality, we strive in keeping
                  girls safe and well dressed.{" "}
                  <a href="#girls" className="highlight">
                    See more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="container">
          <div className="grid-2">
            <img src={Vision} alt="" />
            <div className="about-content">
              <h1>Our Vision and Purpose</h1>

              <p>
                Here at <span className="highlight">Flossy's Clothing</span> we
                fight against things that affect most children in Africa and
                parts of Asia in anyway we see best.
              </p>

              <h1>How do we do this?</h1>
              <p>
                We do not need to have large amounts of money coming our way by
                over pricing our commodities, that is why we decided to create a
                platform for <span className="highlight">everyone</span> and
                <span className="highlight">anyone</span> to contribue the
                little they have.
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

      {/* CONTACT SECTION */}
      <section id="contact">
        <div className="container">
          <div className="subscribe">
            <h2>Why should you subscribe?</h2>
            <p>
              We believe everyone wants quality clothes yet affordable at the
              same time and that is why we created this platform.
            </p>
            <p>
              Have the audacity of looking good knowing that you are also doing
              someone else good.
            </p>
            <p>Perks include:</p>
            <ul>
              <li>
                Great, amazing and
                <span className="highlight">affordable</span>
                clothes
              </li>
              <li>Get notified of what's available anytime and anywhere</li>
              <li>Donate and see what others are donating</li>
              <li>
                You get to
                <span className="highlight">feed</span>,
                <span className="highlight">dress</span>
                and
                <span className="highlight">educate</span>
                children across Africa and Asia
              </li>
            </ul>
          </div>

          <form className="contact-form">
            <input
              type="email"
              name="email"
              placeholder="Enter email to subscribe"
            />
            <button className="button-solid" name="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CATEGORIES SECTION 2 */}
      <section id="categories-2">
        <div className="container">
          <div className="category" id="mens">
            <h2>Men's</h2>
            <div className="grid-3">
              <img src={Mwear1} alt="A shirt" />
              <img src={Mwear2} alt="A shirt" />
              <img src={Mwear3} alt="A shirt" />
            </div>
          </div>
          <div className="category" id="womens">
            <h2>Women's</h2>
            <div className="grid-3">
              <img src={Wmwear1} alt="A green blouse" />
              <img src={Wmwear2} alt="A brownish blouse" />
              <img src={Wmwear1} alt="A green blouse" />
            </div>
          </div>
          <div className="category" id="boys">
            <h2>Boy's</h2>
            <div className="grid-3">
              <img src={Boys} alt="" />
              <img src={Bwear} alt="" />
              <img src={Boys} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sections;
