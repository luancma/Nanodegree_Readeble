import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { actionVoteUpPost, actionVoteDownPost } from "../store/actions/posts";
import { Button } from "semantic-ui-react";

class Details extends React.Component {
  votePostUp = id => {
    this.props.dispatch(actionVoteUpPost(id));
  };

  votePostDown = id => {
    this.props.dispatch(actionVoteDownPost(id));
  };
  render() {
    console.log(this.props.posts);
    return (
      <div>
        {Object.values(this.props.posts).map(
          post =>
            post.id == this.props.match.params.id && (
              <div style={{ padding: "25px" }} key={post.id}>
                <Button.Group>
                  <Button positive onClick={() => this.votePostUp(post.id)}>
                    +
                  </Button>
                  <Button.Or text={post.voteScore} />
                  <Button negative onClick={() => this.votePostDown(post.id)}>
                    -
                  </Button>
                </Button.Group>
                <h1> {post.category} </h1>
                <h1> Post: {post.title} </h1>
                <h2> Author: {post.author} </h2>
                <p>{post.body}</p>
                <h1> Comentários : </h1>
              </div>
            )
        )}
        <Comments postId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Details);
