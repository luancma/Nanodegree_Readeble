import { getAllComments, getAllCommentsById } from "../../utils/apiTeste";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_BY_ADD = "FETCH_COMMENTS_BY_ADD";

export function fetchCommentByIdSuccess(comments) {
  return {
    type: FETCH_COMMENTS_BY_ADD,
    comments
  };
}

export function fetchAllCommentsSuccess(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

export const fetchAllComments = () => {
  return dispatch => {
    return getAllComments()
      .then(response => {
        dispatch(fetchAllCommentsSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchCommentById = () => {
  return dispatch => {
    return getAllCommentsById()
      .then(response => {
        dispatch(fetchCommentByIdSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
