import React from "react";
import Mens from "../images/mens.jpg";
import Womens from "../images/womens.jpg";
import Boys from "../images/boys.jpg";
import Girls from "../images/girls.jpg";
import "./css/Categories.css";

function Categories() {
  return (
    <section id="categories">
      <div className="container">
        <h1>Categories</h1>
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
  );
}

export default Categories;
