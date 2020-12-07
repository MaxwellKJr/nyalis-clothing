import React from "react";
import Mwear1 from "../images/mwear-1.webp";
import Mwear2 from "../images/mwear-2.jpg";
import Mwear3 from "../images/mwear-3.jpg";
import Wmwear1 from "../images/wmwear-1.jpg";
import Wmwear2 from "../images/wmwear-2.webp";
import Bwear from "../images/boyswear.jpg";
import Boys from "../images/boys.jpg";

function Categories2() {
  return (
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
  );
}

export default Categories2;
