import { getAllPosts, createPost } from "../../utils/apiTeste";
export const FETCH_POSTS = "FETCH_POSTS";
export const ACTION_ADD_POST = "ACTION_ADD_POST";

export function fetchAllPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}

export function addPostSuccess(post) {
  return {
    type: ACTION_ADD_POST,
    post
  };
}

export const actionAddPostSuccess = (
  id,
  timestamp,
  title,
  author,
  textBody,
  category
) => {
  return dispatch => {
    return createPost(id, timestamp, title, author, textBody, category)
      .then(response => {
        dispatch(addPostSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

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
