import {
  FETCH_POSTS,
  ACTION_ADD_POST,
  ADD_VOTE_POST,
  REMOVE_VOTE_POST,
  FETCH_POST_ID,
  DELETE_POST,
  FETCH_POST_BY_CATEGORY,
  EDIT_POST
} from "../actions/posts";
const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.posts];

    case FETCH_POST_ID:
      return [...state.map(post => post.id == action.post.id && post)];

    case FETCH_POST_BY_CATEGORY:
      return [
        ...state.map(item => {
          return item.category === action.post.category ? action.post : item;
        })
      ];

    case DELETE_POST:
      return [...state.filter(item => item.id != action.post.id)];

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

    case EDIT_POST:
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
