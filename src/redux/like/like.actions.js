import {LikeActionTypes} from "../../redux/like/like.action.types";

export const toggleLikeAction = (item) => (
  {
    type: LikeActionTypes.TOGGLE_LIKE,
    payload: item,
  }
);