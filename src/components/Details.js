import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Comments from "./Comments";
import {
  actionVoteUpPost,
  actionVoteDownPost,
  actionDeletePost,
  actionFetchPostById
} from "../store/actions/posts";
import { Button, Icon, Item, Grid, Card } from "semantic-ui-react";
import Posts from "./Posts";
import Axios from "axios";

class Details extends React.Component {
  state = {
    redirect: false,
    editePost: false
  };

  componentDidMount() {
    this.props
      .dispatch(actionFetchPostById(this.props.match.params.post_id))
      .then(data => {
        this.props.posts.length == 0
          ? this.setState({ redirect: true })
          : console.log(this.props.posts.map(item => item.category));
      });
  }

  btnEditPost = () => {
    this.setState({
      editePost: true
    });
  };

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
    console.log(this.props.posts);
    return (
      <div>
        {this.state.redirect === true ? (
          <Redirect to="page/noteFound" />
        ) : (
          this.props.posts.map(item => (
            <Grid centered columns={1} key={item.id}>
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
                              inverted
                              color="blue"
                              circular
                              icon
                              onClick={() => this.votePostUp(item.id)}
                            >
                              <Icon name="thumbs up outline" />
                            </Button>
                            <Button
                              inverted
                              color="blue"
                              circular
                              icon
                              onClick={() => this.votePostDown(item.id)}
                            >
                              <Icon name="thumbs down outline" />
                            </Button>
                            <Link to={`/${item.category}/${item.id}/edit`}>
                              <Button inverted color="purple" circular icon>
                                <Icon name="edit outline" />
                              </Button>
                            </Link>
                            <Button
                              inverted
                              color="red"
                              circular
                              icon
                              onClick={() => this.deletePost(item.id)}
                            >
                              <Icon name="delete" />
                            </Button>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                    <Comments postId={this.props.match.params.post_id} />
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post
  };
};

export default connect(mapStateToProps)(Details);
