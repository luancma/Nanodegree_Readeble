import { getCommentById } from "../../utils/apiTeste";

export const FETCH_COMMENT = "FETCH_COMMENT";

export function fetchCommentSuccess(comment) {
  return {
    type: FETCH_COMMENT,
    comment
  };
}

export const actionFetchComment = id => {
  console.log(id);
  return dispatch => {
    return getCommentById(id)
      .then(response => {
        dispatch(fetchCommentSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
