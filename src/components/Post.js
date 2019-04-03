import React from "react";
import { Card, Button, Icon, Item, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actionVoteUpPost,
  fetchAllPosts,
  actionVoteDownPost
} from "../store/actions/posts";

class Post extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  voteUpPost = id => {
    console.log(id);
    this.props.dispatch(actionVoteUpPost(id));
  };

  voteDownPost = id => {
    this.props.dispatch(actionVoteDownPost(id));
  };

  render() {
    return (
      <Grid centered columns={1} key={this.props.posts.id}>
        <Grid.Column>
          <Card.Group>
            <Card fluid color="green" style={{ padding: "25px" }}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Link
                      to={`/${this.props.postDetails.category}/${
                        this.props.postDetails.id
                      }`}
                    >
                      <Item.Header
                        as="a"
                        style={{ fontWeight: "600", color: "black" }}
                      >
                        <h1>{this.props.postDetails.title}</h1>
                      </Item.Header>
                    </Link>
                    <Item.Description>
                      <h3>{this.props.postDetails.body}</h3>
                    </Item.Description>
                    <Item.Description>
                      {this.props.postDetails.author}
                    </Item.Description>
                    <Item.Extra>
                      Number of comments: {this.props.postDetails.commentCount}
                    </Item.Extra>
                    <Item.Extra>
                      {this.props.postDetails.voteScore < 0 ? (
                        <Icon color="red" name="check" />
                      ) : (
                        <Icon color="green" name="check" />
                      )}
                      {this.props.postDetails.voteScore}
                    </Item.Extra>
                    <Item.Extra>
                      <Button
                        inverted
                        color="green"
                        circular
                        icon
                        onClick={() =>
                          this.voteUpPost(this.props.postDetails.id)
                        }
                      >
                        <Icon name="thumbs up outline" />
                      </Button>
                      <Button
                        inverted
                        color="red"
                        circular
                        icon
                        onClick={() =>
                          this.voteDownPost(this.props.postDetails.id)
                        }
                      >
                        <Icon name="thumbs down outline" />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Post);
