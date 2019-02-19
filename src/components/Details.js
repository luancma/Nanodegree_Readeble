import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";

class Details extends React.Component {
  render() {
    return Object.values(this.props.posts).map(
      post =>
        post.id == this.props.match.params.id && (
          <div style={{ padding: "25px" }} key={post.id}>
            <h1> teste </h1>
            <h1> Post: {post.title} </h1>
            <h2> Author: {post.author} </h2>
            <p>{post.body}</p>
            <h1> Comentários : </h1>
            <Comments postId={post.id} />
          </div>
        )
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Details);
