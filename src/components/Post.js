import React from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionVoteUpPost, fetchAllPosts } from "../store/actions/posts";

class Post extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  voteUpPost = id => {
    console.log(id);
    this.props.dispatch(actionVoteUpPost(id));
  };

  render() {
    return (
      <div>
        <Card.Group>
          <Card fluid color="green" style={{ padding: "25px" }}>
            <Link
              to={`/${this.props.postDetails.category}/${
                this.props.postDetails.id
              }`}
              style={{ color: "black" }}
            >
              <h1>{this.props.postDetails.title}</h1>
              <p>{this.props.postDetails.author}</p>
            </Link>
            {this.props.postDetails.voteScore}
            <button onClick={() => this.voteUpPost(this.props.postDetails.id)}>
              +
            </button>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Post);
