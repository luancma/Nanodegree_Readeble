import React, { Component } from "react";
import { Icon, Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  voteDownById,
  voteUpById,
  deleteCommentAction,
  fetchComment
} from "../store/actions/comments";

class CommentDetails extends Component {
  componentDidMount() {
    console.log(this.props.commentID);
    this.props.dispatch(fetchComment(this.props.commentID));
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
    console.log(this.props.comment);
    return (
      <div>
        {Object.values(this.props.comment).map(item => (
          <div key={item.id}>
            <p>{item.id}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};

export default connect(mapStateToProps)(CommentDetails);
