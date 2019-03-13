import axios from "axios";

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json"
};

export const createNewComment = (id, timestamp, body, author, parentId) => {
  return axios.post(
    `${api}/comments`,
    { id, timestamp, body, author, parentId },
    { headers }
  );
};

//Get all posts of the api
export const getAllPosts = () => {
  return axios.get(`${api}/posts`, { headers });
};

//Get all comments of a specific post by Id
export const getAllCommentsById = id => {
  return axios.get(`${api}/posts/${id}/comments`, { headers });
};

// Vote down a comment by Id
export const voteDownComment = id => {
  return axios.post(
    `${api}/comments/${id}`,
    { option: "downVote" },
    { headers }
  );
};

// Vote up a comment by Id
export const voteUpComment = id => {
  return axios.post(`${api}/comments/${id}`, { option: "upVote" }, { headers });
};

export const createPost = (id, timestamp, title, body, author, category) => {
  return axios.post(
    `${api}/posts`,
    {
      id,
      timestamp,
      title,
      author,
      body,
      category
    },
    { headers }
  );
};

// DELETE COMMET:
export const deleteComment = id => {
  console.log(id);
  return axios.delete(`${api}/comments/${id}`, { headers });
};
