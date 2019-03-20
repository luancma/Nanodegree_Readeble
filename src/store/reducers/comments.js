import {
  FETCH_COMMENTS_BY_ID,
  ADD_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT_DOWN,
  VOTE_COMMENT_UP
} from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_ID:
      return [...action.comments];

    case ADD_COMMENT:
      return [...state.concat(action.comment)];

    case DELETE_COMMENT:
      return [...state.filter(item => item.id != action.comment.id)];

    case VOTE_COMMENT_DOWN:
      return [
        ...state.map(item => {
          return item.id === action.comment.id ? action.comment : item;
        })
      ];
    case VOTE_COMMENT_UP:
      return [
        ...state.map(item => {
          return item.id === action.comment.id ? action.comment : item;
        })
      ];
    default:
      return state;
  }
};
export default comments;
