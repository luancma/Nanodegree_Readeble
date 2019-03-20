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
      return [...state, ...action.posts];
    case FETCH_POST_ID:
      return {
        ...state,
        ...console.log(state)
      };
    case ACTION_ADD_POST:
      return [...state.concat(action.post)];
    case ADD_VOTE_POST:
      return [
        ...state.map(item => {
          return item.id === action.post.id ? action.post : item;
        })
      ];
    case REMOVE_VOTE_POST:
      return [
        ...state.map(item => {
          return item.id === action.post.id ? action.post : item;
        })
      ];
    default:
      return state;
  }
};
export default posts;
