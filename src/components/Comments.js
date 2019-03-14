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
        {Object.values(this.props.comments).map(comment => (
          <Comment.Group>
            <Comment
              fluid
              header="Option 1"
              style={{ padding: "25px" }}
              key={comment.id}
            >
              <Comment.Author>{comment.author} </Comment.Author>
              <Comment.Text> {comment.body} </Comment.Text>
              <Comment.Actions>
                <Comment.Action>{comment.voteScore}</Comment.Action>
                <Comment.Action onClick={() => this.voteUpComment(comment.id)}>
                  <Icon name="thumbs up outline" />
                  Up
                </Comment.Action>
                <Comment.Action
                  onClick={() => this.voteDownComment(comment.id)}
                >
                  <Icon name="thumbs down outline" />
                  Down
                </Comment.Action>
                <Comment.Action onClick={() => this.deleteComment(comment.id)}>
                  <Icon name="delete" />
                  Delete
                </Comment.Action>
              </Comment.Actions>
            </Comment>
          </Comment.Group>
        ))}

        <div>
          <NewComment postId={this.props.postId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Comments);
