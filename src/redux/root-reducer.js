import {combineReducers} from "redux";

import likeReducer from "../redux/like/like.reducer";

export const rootReducer = combineReducers(
  {
    likes: likeReducer,
  }
);