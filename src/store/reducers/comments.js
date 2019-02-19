import {
  FETCH_COMMENTS_BY_ID,
  VOTE_COMMENT_DOWN,
  VOTE_COMMENT_UP,
  ADD_COMMENT
} from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_ID:
      return {
        ...action.comments.reduce((commentsDetails, comment) => {
          commentsDetails[comment.id] = comment;
          return commentsDetails;
        }, {})
      };

    case ADD_COMMENT:
      return {
        ...[action.comment]
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
