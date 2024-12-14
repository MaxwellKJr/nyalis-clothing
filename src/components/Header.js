import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const burgerMenuToggle = () => {
    const menu = document.querySelector("#header .nav-links");
    menu.classList.toggle("active");
  };

  const removeMenu = () => {
    const menu = document.querySelector("#header .nav-links");
    menu.classList.remove("active");
  };

  return (
    <header id="header">
      <nav className="main-nav">
        <Link to="/" className="logo" title="Simply Elegant">
          Nyali's
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" title="Home" onClick={removeMenu}>
              Home
            </Link>
          </li>
          <li>
            <a href="/#categories" title="What's offered" onClick={removeMenu}>
              Categories
            </a>
          </li>
          <li>
            <a href="/#about" title="Know us" onClick={removeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="/#contact" title="Reach us" onClick={removeMenu}>
              Contact
            </a>
          </li>
          <li>
            <Link to="/donate" title="Become a Member!" onClick={removeMenu}>
              Donate
            </Link>
          </li>
        </ul>

        <div className="burger" onClick={burgerMenuToggle}>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
