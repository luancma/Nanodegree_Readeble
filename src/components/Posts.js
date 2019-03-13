import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchAllPosts } from "../store/actions/posts";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    console.log(this.props.posts);
    return (
      <Container>
        {Object.values(this.props.posts).map(post => (
          <Post post={post} key={post.id} />
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
