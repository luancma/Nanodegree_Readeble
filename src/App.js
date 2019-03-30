import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import { Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { Container } from "semantic-ui-react";
import CategoryDetails from "./components/CategoryDetails";
import Nav from "./components/NavBar";
import EditPost from "./components/EditPost";
import NewPostCategory from "./components/NewPostCategory";

const App = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/newPost" component={NewPost} />
          <Route exact path="/newPost/:category" component={NewPostCategory} />
          <Route exact path="/:category/:post_id" component={Details} />
          <Route exact path="/:category" component={CategoryDetails} />
          <Route exact path="/Edit/:id" component={EditPost} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
