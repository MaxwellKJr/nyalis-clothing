import React from "react";
import Welcome from "./Welcome";
import Categories from "./Categories";
import About from "./About";
import Contact from "./Contact";
import Categories2 from "./Categories2";

const Sections = () => {
  return (
    <main>
      {/* WELCOMING AREA */}
      <Welcome />

      {/*  CATEGORIES SECTION */}
      <Categories />

      {/* ABOUT SECTION */}
      <About />

      {/* CONTACT SECTION */}
      <Contact />

      {/* CATEGORIES SECTION 2 */}
      <Categories2 />
    </main>
  );
};

export default Sections;
