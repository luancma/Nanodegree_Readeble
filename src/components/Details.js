import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Comments from "./Comments";
import {
  actionVoteUpPost,
  actionVoteDownPost,
  fetchAllPosts,
  actionDeletePost
} from "../store/actions/posts";
import { Button, Icon, Item, Grid, Card } from "semantic-ui-react";
import Posts from "./Posts";

class Details extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  votePostUp = id => {
    console.log(id);
    this.props.dispatch(actionVoteUpPost(id));
  };

  votePostDown = id => {
    this.props.dispatch(actionVoteDownPost(id));
  };

  deletePost = id => {
    this.props.dispatch(actionDeletePost(id)) &&
      this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        {this.state.redirect === true ? (
          <Redirect to="/" />
        ) : (
          this.props.posts.map(
            item =>
              item.id == this.props.match.params.id && (
                <Grid centered columns={1}>
                  <Grid.Column>
                    <Card.Group>
                      <Card fluid color="green" style={{ padding: "25px" }}>
                        <Item.Group>
                          <Item>
                            <Item.Content>
                              <Item.Header as="a">{item.author}</Item.Header>
                              <Item.Description>
                                <p>{item.body}</p>
                                {item.voteScore}
                              </Item.Description>
                              <Item.Extra>
                                <Button
                                  basic
                                  onClick={() => this.votePostUp(item.id)}
                                  icon
                                >
                                  <Icon name="thumbs up outline" />
                                </Button>
                                <Button
                                  basic
                                  onClick={() => this.votePostDown(item.id)}
                                  icon
                                >
                                  <Icon name="thumbs down outline" />
                                </Button>
                                <Button
                                  basic
                                  onClick={() => this.deletePost(item.id)}
                                  icon
                                >
                                  <Icon name="delete" />
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        </Item.Group>
                        <Comments postId={this.props.match.params.id} />
                      </Card>
                    </Card.Group>
                  </Grid.Column>
                </Grid>
              )
          )
        )}
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
