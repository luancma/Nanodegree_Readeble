import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import {
  actionVoteUpPost,
  actionVoteDownPost,
  actionFetchPostById
} from "../store/actions/posts";
import { Button, Icon, Item } from "semantic-ui-react";

class Details extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionFetchPostById(this.props.match.params.id));
  }

  votePostUp = id => {
    this.props.dispatch(actionVoteUpPost(id));
  };

  votePostDown = id => {
    this.props.dispatch(actionVoteDownPost(id));
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <Item.Group key={post.id}>
          <Item>
            <Item.Content>
              <Item.Header as="a">{post.author}</Item.Header>
              <Item.Description>
                <p>{post.body}</p>
              </Item.Description>
              <Item.Extra>
                <Button basic onClick={() => console.log("item")} icon>
                  <Icon name="thumbs up outline" />
                </Button>
                <Button basic onClick={() => console.log("item")} icon>
                  <Icon name="thumbs down outline" />
                </Button>
                <Button basic onClick={() => console.log("item")} icon>
                  <Icon name="delete" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Comments postId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post
  };
};

export default connect(mapStateToProps)(Details);
