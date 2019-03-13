import {
  FETCH_COMMENTS_BY_ID,
  VOTE_COMMENT_DOWN,
  VOTE_COMMENT_UP,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_ID:
      return {
        ...state,
        ...action.comments
      };

    case ADD_COMMENT:
      return {
        ...Object.values(state).concat(action.comment)
      };

    case DELETE_COMMENT:
      return {
        ...Object.values(state).filter(item => item.id != action.comment.id)
      };

    case VOTE_COMMENT_DOWN:
      return {
        ...state,
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
export default comments;
