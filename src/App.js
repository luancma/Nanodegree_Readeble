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

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/newPost" component={NewPost} />
            <Route exact path="/Post/:id" component={Details} />
            <Route
              exact
              path="/Category/:category"
              component={CategoryDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
