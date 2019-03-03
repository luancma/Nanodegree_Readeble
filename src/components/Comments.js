import React, { Component } from "react";
import { connect } from "react-redux";
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
    Object.values(this.props.comments).filter(
      item => item.deleted !== "false" && console.log(item)
    );
    return (
      <div>
        {Object.values(this.props.comments).map(comment =>
          comment.id !== undefined ? (
            <div style={{ padding: "25px" }} key={comment.id}>
              {/* // DELETE COMMET: */}
              <button onClick={() => this.deleteComment(comment.id)}>X</button>
              <h3> {comment.author} </h3>
              <p> {comment.body} </p>
              <p>{comment.voteScore}</p>
              <button onClick={() => this.voteUpComment(comment.id)}>+</button>
              <button onClick={() => this.voteDownComment(comment.id)}>
                -
              </button>
            </div>
          ) : (
            console.log("nada")
          )
        )}
        <div>
          <NewComment postId={this.props.postId} />
        </div>
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
