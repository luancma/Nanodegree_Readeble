import React, { Component } from "react";
import { connect } from "react-redux";
import { voteDownById, voteUpById } from "../store/actions/comments";
import { deleteCommentAction } from "../store/actions/comments";
import { Comment, Icon } from "semantic-ui-react";

class CommentDetails extends Component {
  componentDidMount() {}
  deleteComment = id => {
    this.props.dispatch(deleteCommentAction(id));
  };

  voteDownComment = id => {
    this.props.dispatch(voteDownById(id));
  };

  voteUpComment = id => {
    this.props.dispatch(voteUpById(id));
  };

  deleteComment = id => {
    this.props.dispatch(deleteCommentAction(id));
  };

  render() {
    console.log(this.props.commentDetails);
    const { id, body, voteScore, author } = this.props.commentDetails;
    return (
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author>{author}</Comment.Author>
            <Comment.Text>{body}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>{voteScore}</Comment.Action>
              <Comment.Action
                style={{ marginLeft: "10px" }}
                onClick={() => this.voteUpComment(id)}
              >
                <Icon name="thumbs up outline" />
              </Comment.Action>
              <Comment.Action
                style={{ marginLeft: "10px" }}
                onClick={() => this.voteDownComment(id)}
              >
                <Icon name="thumbs down outline" />
              </Comment.Action>

              <Comment.Action
                style={{ marginLeft: "10px" }}
                onClick={() => this.deleteComment(id)}
              >
                <Icon name="remove" />
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};

export default connect(mapStateToProps)(CommentDetails);
