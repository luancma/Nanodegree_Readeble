import { FETCH_COMMENT } from "../actions/comment";

const comment = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENT:
      return [...state, ...action.comment];
    default:
      return state;
  }
};
export default comment;
