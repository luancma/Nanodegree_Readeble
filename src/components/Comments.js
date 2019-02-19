import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    return Object.values(this.props.comments).map(
      comment =>
        comment.postId == this.props.postId && (
          <div style={{ padding: "25px" }} key={comment.id}>
            <h3> {comment.name} </h3>
            <h3> {comment.email} </h3>
            <p> {comment.body} </p>
          </div>
        )
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
