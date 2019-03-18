import {
  FETCH_COMMENT,
  VOTE_COMMENT_DOWN,
  VOTE_COMMENT_UP
} from "../actions/comments";

const comment = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENT:
      return {
        ...action.comment
      };
    case VOTE_COMMENT_DOWN:
      return {
        ...state,
        ...console.log(action.comment),
        ...Object.values(state).map(
          item => item.id === action.comment.id && action.comment
        )
      };
    case VOTE_COMMENT_UP:
      return {
        ...state,
        ...Object.values(state).map(
          item => item.id === action.comment.id && action.comment
        )
      };
    default:
      return state;
  }
};
export default comment;
