import React from "react";

import "./nav-bar.styles.css";

const NavBar = () => (
  <div class="nav-bar">
    <div className="navbar-logo">
      <i class="fas fa-home"></i> HouseMate
    </div>
    <div className="other-elements">
      <a href="/" className="nav-element">
        Home
      </a>
      <a href="/" className="nav-element">
        Featured
      </a>
      <a href="/" className="nav-element">
        Contact
      </a>
      <a href="/" className="nav-element">
        Sign Up
      </a>
    </div>
  </div>
);

export default NavBar;
