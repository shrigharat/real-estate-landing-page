import React from "react";

import Card from "../../components/card/card.component";

import "./featured-page.styles.css";

import {picksList} from "./picks";

const FeaturedPage = ({likesList}) => {
  return (
    <div>
      <div className="featured-header">Featured picks</div>
      <div className="featured-grid">
        {
          picksList.map(pick => <Card key={pick.id} pick={pick}/>)
        }
      </div>
    </div>
  );
};



export default FeaturedPage;
