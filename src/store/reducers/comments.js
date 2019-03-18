import {
  FETCH_COMMENTS_BY_ID,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_ID:
      return {
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
    default:
      return state;
  }
};
export default comments;
