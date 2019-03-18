import React, { Component } from "react";
import { Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchAllPosts } from "../store/actions/posts";

class Posts extends Component {
  state = {
    orderByScore: true
  };

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    const postDetails = Object.values(this.props.posts);

    this.state.orderByScore
      ? postDetails.sort(function(a, b) {
          return b.voteScore - a.voteScore;
        })
      : postDetails.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
    return (
      <div>
        <Button.Group>
          <Button onClick={() => this.setState({ orderByScore: false })}>
            Order by: Date
          </Button>
          <Button onClick={() => this.setState({ orderByScore: true })}>
            Order by: Score
          </Button>
        </Button.Group>
        {postDetails.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
