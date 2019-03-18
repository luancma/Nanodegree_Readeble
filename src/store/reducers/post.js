import { FETCH_POST_ID } from "../actions/posts";
const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POST_ID:
      return {
        ...state,
        ...action.post
      };
    default:
      return state;
  }
};
export default posts;
