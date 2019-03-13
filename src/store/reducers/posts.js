import { FETCH_POSTS, ACTION_ADD_POST } from "../actions/posts";

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ACTION_ADD_POST:
      return {
        ...state,
        ...console.log(action.post)
      };
    default:
      return state;
  }
};
export default posts;
