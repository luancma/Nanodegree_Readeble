import {
  getAllPosts,
  createPost,
  voteUpPost,
  voteDownPost,
  getPostsById,
  deletePost,
  getCategoryDefined,
  editPost
} from "../../utils/apiTeste";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST_BY_CATEGORY = "FETCH_POST_BY_CATEGORY";
export const FETCH_POST_ID = "FETCH_POST_ID";
export const ACTION_ADD_POST = "ACTION_ADD_POST";
export const ADD_VOTE_POST = "ADD_VOTE_POST";
export const REMOVE_VOTE_POST = "REMOVE_VOTE_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";

export function fetchAllPostsSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}

export function fetchPostByCategorySuccess(post) {
  return {
    type: FETCH_POST_BY_CATEGORY,
    post
  };
}

export function fetchPostIdSuccess(post) {
  return {
    type: FETCH_POST_ID,
    post
  };
}

export function deletePostSuccess(post) {
  return {
    type: DELETE_POST,
    post
  };
}

export function addVotePost(post) {
  return {
    type: ADD_VOTE_POST,
    post
  };
}

export function remoteVotePost(post) {
  return {
    type: REMOVE_VOTE_POST,
    post
  };
}

export function addPostSuccess(post) {
  return {
    type: ACTION_ADD_POST,
    post
  };
}

export function editPostSuccess(post) {
  return {
    type: EDIT_POST,
    post
  };
}

export const actionDeletePost = id => {
  return dispatch => {
    console.log(id);
    return deletePost(id)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
        console.log("DELETADO COM SUCESSO");
      })
      .catch(error => {
        console.log(error);
      });
  };
};

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

export const actionVoteUpPost = id => {
  return dispatch => {
    return voteUpPost(id)
      .then(response => {
        dispatch(addVotePost(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionVoteDownPost = id => {
  return dispatch => {
    return voteDownPost(id)
      .then(response => {
        dispatch(remoteVotePost(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionFetchPostById = id => {
  return dispatch => {
    return getPostsById(id)
      .then(response => {
        dispatch(fetchPostIdSuccess(response.data));
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

export const actionFetchPostsByCategory = category => {
  return dispatch => {
    return getCategoryDefined(category)
      .then(response => {
        dispatch(fetchPostByCategorySuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionEditPost = (id, title, body) => {
  return dispatch => {
    return editPost(id, title, body)
      .then(response => {
        dispatch(editPostSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
