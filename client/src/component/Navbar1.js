import React from "react";
import "./css/navbar1.css";

const Navbar1 = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation-item">
          <a href="/">Home</a>
        </li>
        <li className="navigation-item">
          <a href="/">About</a>
        </li>
        <li className="navigation-item">
          <a href="/signup">signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;