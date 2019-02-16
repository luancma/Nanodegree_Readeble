import React from "react";
import { getAllPosts } from "../utils/apiTeste";
import { Container } from "semantic-ui-react";

class Details extends React.Component {
  state = {
    post: []
  };

  componentDidMount() {
    getAllPosts().then(res => {
      const posts = res.data;
      posts.filter(
        post =>
          post.id == this.props.match.params.id && this.setState({ post: post })
      );
    });
  }

  render() {
    return (
      <div style={{ padding: "25px" }}>
        <h1> Post: {this.state.post.title} </h1>
        <h2> Author: {this.state.post.author} </h2>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}
export default Details;
