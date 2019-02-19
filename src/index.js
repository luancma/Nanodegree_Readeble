import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchAllPosts } from "./store/actions/posts";
import { fetchAllComments } from "./store/actions/comments";
const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchAllPosts());
// store.dispatch(fetchAllComments());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
