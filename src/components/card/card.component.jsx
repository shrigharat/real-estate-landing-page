import React from "react";
import { connect } from "react-redux";

import { toggleLikeAction } from "../../redux/like/like.actions";

import "./card.styles.css";

const Card = ({ pick, toggleLike, likesList }) => {
  return (
    <div className="card">
      <div className="like-button" onClick={() => toggleLike(pick)}>
        <i className={ isItemLiked(likesList, pick.id) ? "fas fa-heart" : "far fa-heart"}></i>
      </div>
      <img className="image" src={pick.imgUrl} alt="" />
      <span className="description">{pick.title}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  likesList: state.likes.likesList,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLike: (item) => dispatch(toggleLikeAction(item)),
});

const isItemLiked = (likesList, itemId) => {
  return likesList.hasOwnProperty(`${itemId}`);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
