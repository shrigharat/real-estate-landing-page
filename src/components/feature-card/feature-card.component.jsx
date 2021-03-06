import React from "react";

import "./feature-card.styles.css";

const FeatureCard = ({feature}) => (
  <div className="feature-card">
    <i className={feature.icon + " icon"}></i>
    <span className="title">
       {feature.title}
    </span>
    <span className="description">
      {feature.description}
    </span>
  </div>
);

export default FeatureCard;