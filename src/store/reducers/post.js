import {
  FETCH_POST_ID,
  ADD_VOTE_POST,
  REMOVE_VOTE_POST
} from "../actions/posts";

const post = (state = [], action) => {
  switch (action.type) {
    case FETCH_POST_ID:
      return [action.post];
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
export default post;
