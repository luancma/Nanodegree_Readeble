import { FETCH_POSTS } from "../actions/posts";

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...action.posts.reduce((postDetails, post) => {
          postDetails[post.id] = post;
          return postDetails;
        }, {})
      };
    default:
      return state;
  }
};
export default posts;
