import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCommentById,
  voteDownById,
  voteUpById
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
    this.props.dispatch(voteUpById(id));
  }

  render() {
    return (
      <div>
        {Object.values(this.props.comments).map(comment => (
          comment.id !== undefined 
          ?(
          <div style={{ padding: "25px" }} key={comment.id}>
            <h3> {comment.author} </h3>
            <p> {comment.body} </p>
            <p>{comment.voteScore}</p>
            <button onClick={() => this.voteUpComment(comment.id)}>+</button>
            <button onClick={() => this.voteDownComment(comment.id)}>-</button>
          </div>
          )
          : console.log('nada')
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
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
