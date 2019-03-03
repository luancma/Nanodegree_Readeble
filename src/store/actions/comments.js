import {
  getAllCommentsById,
  voteDownComment,
  voteUpComment,
  createNewComment,
  deleteComment
} from "../../utils/apiTeste";
export const FETCH_COMMENTS_BY_ID = "FETCH_COMMENTS_BY_ID";
export const VOTE_COMMENT_DOWN = "VOTE_COMMENT_DOWN";
export const VOTE_COMMENT_UP = "VOTE_COMMENT_UP";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function fetchCommentByIdSuccess(comments) {
  return {
    type: FETCH_COMMENTS_BY_ID,
    comments
  };
}

export function deleteCommentSuccess(comment) {
  return {
    type: DELETE_COMMENT,
    comment
  };
}

export function voteDownByIdSuccess(comment) {
  return {
    type: VOTE_COMMENT_DOWN,
    comment
  };
}

export function voteUpByIdSuccess(comment) {
  return {
    type: VOTE_COMMENT_UP,
    comment
  };
}

export function addCommentSuccess(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export const addComment = (id, timestamp, body, author, parentId) => {
  return dispatch => {
    return createNewComment(id, timestamp, body, author, parentId)
      .then(response => {
        dispatch(addCommentSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteCommentAction = id => {
  return dispatch => {
    return deleteComment(id)
      .then(response => {
        dispatch(deleteCommentSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const voteUpById = id => {
  return dispatch => {
    return voteUpComment(id)
      .then(response => {
        dispatch(voteUpByIdSuccess(id));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const voteDownById = id => {
  return dispatch => {
    return voteDownComment(id)
      .then(response => {
        dispatch(voteDownByIdSuccess(id));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchCommentById = id => {
  return dispatch => {
    return getAllCommentsById(id)
      .then(response => {
        dispatch(fetchCommentByIdSuccess(response.data));
        console.log("Success");
      })
      .catch(error => {
        console.log(error);
      });
  };
};
