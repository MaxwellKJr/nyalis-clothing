import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="grid-2">
          <div className="grid-item">
            <h3 className="highlight">Contact</h3>
            <p>
              We have been able to grow because of other people outside our
              scope of work through constructive criticism and possible ways to
              help us.
            </p>
            <p>
              If you would like to donate or ask for any queries pleas email us
              at <span className="highlight">info@flossysclothing.shop</span>
            </p>
          </div>
          <div className="links grid-item">
            <h3 className="highlight">Categories</h3>
            <ul>
              <li>
                <a href="#mens">Men's Wear</a>
              </li>
              <li>
                <a href="#womens">Women's Wear</a>
              </li>
              <li>
                <a href="#boys">Boy's Wear</a>
              </li>
              <li>
                <a href="#girls">Girl's Wear</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT AND DEVELOPER DETAILS */}
      <div className="copyright">
        <div className="container">
          <p className="copy">Copyright &copy; 2020 - Flossy's Clothing</p>
          <p className="developer">Developed by Maxwell Kapezi, Jr.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;