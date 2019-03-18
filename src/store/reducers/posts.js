import {
  FETCH_POSTS,
  ACTION_ADD_POST,
  ADD_VOTE_POST,
  REMOVE_VOTE_POST,
  FETCH_POST_ID
} from "../actions/posts";
const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case FETCH_POST_ID:
      return {
        ...state,
        ...Object.values(state).map(
          item => item.id === action.post.id && action.post
        )
      };
    case ACTION_ADD_POST:
      return {
        ...state,
        ...console.log(action.post)
      };
    case ADD_VOTE_POST:
      return {
        ...state,
        ...Object.values(state).map(
          item => item.id === action.post.id && action.post
        )
      };
    case REMOVE_VOTE_POST:
      return {
        ...state,
        ...Object.values(state).map(
          item => item.id === action.post.id && action.post
        )
      };
    default:
      return state;
  }
};
export default posts;
