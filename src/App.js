import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import { Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { Container, Menu, Segment } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import CategoryDetails from "./components/CategoryDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/newPost">New Post</Link>
            </Menu.Item>
          </Menu>
        </Segment>
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
        <NavBar />
      </div>
    );
  }
}

export default App;
