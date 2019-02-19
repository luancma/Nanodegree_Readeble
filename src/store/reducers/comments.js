import { FETCH_COMMENTS } from "../actions/comments";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...action.comments.reduce((commentsDetails, comment) => {
          commentsDetails[comment.id] = comment;
          return commentsDetails;
        }, {})
      };
    default:
      return state;
  }
};
export default comments;
