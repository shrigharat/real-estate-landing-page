import React from "react";

import "./home-page.banner.styles.css";
import image from "./banner-image.jpeg";

const Banner = () => (
  <div className="banner">
    <div className="banner-text">
      We help you find houses, you make them home!
    </div>
    <div className="banner-image">
      <img src={image} alt="" />
    </div>
  </div>
);

export default Banner;
