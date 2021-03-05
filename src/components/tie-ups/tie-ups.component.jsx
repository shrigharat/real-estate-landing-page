import React from "react";

import img1 from "./meyora.png";
import img2 from "./uh.png";
import img3 from "./will.png";

import "./tie-ups.styles.css";

const TieUps = () => (

  <section style={{marginTop: "50px"}}>
    <h1 style={{fontSize: "2rem"}}>Our tieups</h1>
    <div className="tieups">
    <img src={img1} alt="" className="tie-up-image"/>
    <img src={img2} alt="" className="tie-up-image"/>
    <img src={img3} alt="" className="tie-up-image"/>
    <img src={img2} alt="" className="tie-up-image"/>
    <img src={img3} alt="" className="tie-up-image"/>
    <img src={img1} alt="" className="tie-up-image"/>
    </div>
  </section>
);

export default TieUps;
