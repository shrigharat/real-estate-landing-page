import React from "react";

import FeatureCard from "../../components/feature-card/feature-card.component";
import Banner from "../../components/home-page-banner/home-page.banner.component";
import TieUps from "../../components/tie-ups/tie-ups.component";

import "./home-page.styles.css";

const HomePage = () => {
  const features = [
    {
      icon: "fas fa-search-location ",
      title: "Convenient search",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: "fas fa-headset",
      title: "24x7 Customer support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: "fas fa-fighter-jet",
      title: "Best in class deals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div className="home-page">
      <Banner />
      <section id="features">
      <h1 style={{marginTop: "60px", fontSize: "2rem"}}>Features</h1>
      <div className="feature-container">
        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
      </section>
      <TieUps/>
    </div>
  );
};

export default HomePage;
