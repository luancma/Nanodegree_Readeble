import {
  FETCH_COMMENTS_BY_ID,
  VOTE_COMMENT_DOWN,
  VOTE_COMMENT_UP,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENT_ERROR
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
        ...state,
        [action.comment.id]: {
          ...action.comment
        },
      };

    case DELETE_COMMENT:
      return {
        ...Object.values(state).filter(item => item.id != action.comment.id)
      };

    case VOTE_COMMENT_DOWN:
      return {
        ...state,
        [action.comment]: {
          ...state[action.comment],
          voteScore: state[action.comment].voteScore - 1
        }
      };
    case VOTE_COMMENT_UP:
      return {
        ...state,
        [action.comment]: {
          ...state[action.comment],
          voteScore: state[action.comment].voteScore + 1
        }
      };
    default:
      return state;
  }
};
export default comments;
