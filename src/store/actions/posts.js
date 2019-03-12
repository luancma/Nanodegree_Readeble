import { getAllPosts } from "../../utils/apiTeste";
export const FETCH_POSTS = "FETCH_POSTS";

export function fetchAllPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}


export const fetchAllPosts = () => {
  return dispatch => {
    return getAllPosts()
      .then(response => {
        dispatch(fetchAllPostsSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
