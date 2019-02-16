import React, { Component } from "react";
import { getAllPosts } from "../utils/apiTeste";
import { Container } from "semantic-ui-react";
import Post from "./Post";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    getAllPosts().then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  render() {
    console.log(this.props.params.id);

    // let postsArray = Object.values(this.props.posts);
    // postsArray.filter(
    //   item => item == this.props.match.id && console.log("teste")
    // );
    return (
      <Container>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
