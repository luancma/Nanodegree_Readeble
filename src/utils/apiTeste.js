import axios from "axios";

const api = "http://localhost:3001";

export const getAllPosts = () => {
  return axios.get(`${api}/posts`);
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
