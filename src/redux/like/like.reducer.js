import {LikeActionTypes} from "./like.action.types";

const INITIAL_STATE = {
  likesList: {},
};

const likeReducer = (state=INITIAL_STATE, action) => {
  const newLikeList = {
    ...state.likesList
  };
  switch(action.type) {
    case LikeActionTypes.TOGGLE_LIKE:
      if (state.likesList.hasOwnProperty(`${action.payload.id}`)) {
        delete newLikeList[action.payload.id]
      } else {
        newLikeList[action.payload.id] = action.payload;
      }
      return {
        likesList: newLikeList,
      };
    default:
      return state;
  }
}

export default likeReducer;

