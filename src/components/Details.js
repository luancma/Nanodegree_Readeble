import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import {
  actionVoteUpPost,
  actionVoteDownPost,
  actionFetchPostById,
  fetchAllPosts
} from "../store/actions/posts";
import { Button, Icon, Item, Grid, Card } from "semantic-ui-react";

class Details extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.match.params.id);
  //   this.props.dispatch(actionFetchPostById(this.props.match.params.id));
  // }

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

  render() {
    return (
      <div>
        {this.props.posts.map(
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
                                onClick={() => console.log("item")}
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
