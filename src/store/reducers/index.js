import { combineReducers } from "redux";
import post from "./post";
import posts from "./posts";
import comments from "./comments";
import categories from "./categories";

export default combineReducers({
  post,
  posts,
  comments,
  categories
});
