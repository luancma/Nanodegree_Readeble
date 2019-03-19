import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Button, Comment } from "semantic-ui-react";

import {
  fetchCommentById,
  voteDownById,
  voteUpById,
  deleteCommentAction
} from "../store/actions/comments";
import NewComment from "./NewComment";
import CommentDetails from "./CommentDetails";

class Comments extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCommentById(this.props.postId));
  }

  voteDownComment = id => {
    this.props.dispatch(voteDownById(id));
  };

  voteUpComment = id => {
    console.log(id);
    this.props.dispatch(voteUpById(id));
  };

  // DELETE COMMET:
  deleteComment = id => {
    this.props.dispatch(deleteCommentAction(id));
  };

  render() {
    return (
      <div>
        {this.props.comments.map(item => (
          <div>
            <p>{item.voteScore}</p>
            <h4>{item.body}</h4>
            <button onClick={() => this.voteUpComment(item.id)}>+</button>
            <button onClick={() => this.voteDownComment(item.id)}>-</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
