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
    this.state.orderByScore
      ? this.props.posts.sort(function(a, b) {
          return b.voteScore - a.voteScore;
        })
      : this.props.posts.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
    return (
      <div>
        <Button.Group size="large">
          {this.state.orderByScore ? (
            <Button
              positive
              onClick={() => this.setState({ orderByScore: true })}
            >
              Order by: Score
            </Button>
          ) : (
            <Button onClick={() => this.setState({ orderByScore: true })}>
              Order by: Score
            </Button>
          )}
          <Button.Or text="ou" />
          {this.state.orderByScore === false ? (
            <Button
              positive
              onClick={() => this.setState({ orderByScore: false })}
            >
              Order by: Date
            </Button>
          ) : (
            <Button onClick={() => this.setState({ orderByScore: false })}>
              Order by: Date
            </Button>
          )}
        </Button.Group>
        {this.props.posts.map(post => (
          <Post postDetails={post} key={post.id} />
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
