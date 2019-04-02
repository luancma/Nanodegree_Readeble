import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

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

  // voteDownComment = id => {
  //   this.props.dispatch(voteDownById(id));
  // };

  // voteUpComment = id => {
  //   console.log(id);
  //   this.props.dispatch(voteUpById(id));
  // };

  // // DELETE COMMET:
  // deleteComment = id => {
  //   this.props.dispatch(deleteCommentAction(id));
  // };

  render() {
    return (
      <div>
        {this.props.comments.map(item => (
          <CommentDetails commentDetails={item} key={item.id} />
        ))}
        <NewComment postId={this.props.postId} />
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
