import React from "react";
import "./css/Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="main-nav">
        <a href="#" className="logo" title="Simply Elegant">
          Flossy's
        </a>

        <ul className="nav-links">
          <li>
            <a href="#" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#categories" title="What's offered">
              Categories
            </a>
          </li>
          <li>
            <a href="#about" title="Know us">
              About
            </a>
          </li>
          <li>
            <a href="#contact" title="Reach us">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
