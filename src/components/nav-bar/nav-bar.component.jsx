import React from "react";

import {Link} from "react-router-dom";

import "./nav-bar.styles.css";

const NavBar = () => (
  <div className="nav-bar">
    <div className="navbar-logo">
      <i className="fas fa-home"></i> <Link to="/" style={{textDecoration: "none", color: "#F85757"}}>HouseMate</Link>
    </div>
    <div className="other-elements">
      <Link to="/" className="nav-element">Home</Link>
      <Link to="/featured" className="nav-element">Featured</Link>
      <Link to="/wishlist" className="nav-element">Login</Link>
      <Link to="/" className="nav-element">Sign Up</Link>
    </div>
  </div>
);

export default NavBar;
