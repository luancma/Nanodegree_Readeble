import React, { Component } from "react";
import { connect } from "react-redux";
import {
  voteDownById,
  voteUpById,
  deleteCommentAction
} from "../store/actions/comments";
import { actionFetchComment } from "../store/actions/comment";

class CommentDetails extends Component {
  componentDidMount() {
    this.props.dispatch(actionFetchComment(this.props.commentRef.id));
  }

  voteDownComment = id => {
    this.props.dispatch(voteDownById(id));
  };

  voteUpComment = id => {
    this.props.dispatch(voteUpById(id));
  };

  // DELETE COMMET:
  deleteComment = id => {
    this.props.dispatch(deleteCommentAction(id));
  };

  render() {
    console.log(this.props.commentRef.id);
    return (
      <div>
        <button onClick={() => this.voteUpComment(this.props.commentRef.id)}>
          +
        </button>
        <h1>{this.props.commentRef.voteScore}</h1>
      </div>
    );
  }
}

export default connect()(CommentDetails);
