import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="main-nav">
        <a href="/#" className="logo" title="Simply Elegant">
          Flossy's
        </a>

        <ul className="nav-links">
          <li>
            <a href="/#" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/#categories" title="What's offered">
              Categories
            </a>
          </li>
          <li>
            <a href="/#about" title="Know us">
              About
            </a>
          </li>
          <li>
            <a href="/#contact" title="Reach us">
              Contact
            </a>
            <Link to="/Subscribe" title="Become a Member!">
              Subscribe
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
