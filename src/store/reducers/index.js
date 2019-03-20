import { combineReducers } from "redux";
import post from "./post";
import posts from "./posts";
import comments from "./comments";

export default combineReducers({
  post,
  posts,
  comments
});
