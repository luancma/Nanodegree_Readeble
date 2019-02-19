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

export const getAllPosts = () => {
  return axios.get(`${api}/posts`, { headers });
};

export const getAllComments = () => {
  return axios.get(`${api}/comments`, { headers });
};

export const getAllCommentsById = id => {
  return axios.get(`${api}/posts/${id}/comments`, { headers });
};

export const createPost = (id, timestamp, title, author, body) => {
  axios
    .post(`${api}/posts`, {
      id,
      timestamp,
      title,
      author,
      body
    })
    .then(response => {
      console.log(response);
      console.log(response.data);
    });
};
