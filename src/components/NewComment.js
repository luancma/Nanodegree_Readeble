import React, { Component } from "react";
import { Form, Button, Comment } from "semantic-ui-react";
import { addComment } from "../store/actions/comments";
import { connect } from "react-redux";

class NewComment extends Component {
  state = {
    author: "",
    commentBody: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit() {
    const { author, commentBody } = this.state;
    const { postId } = this.props;
    const id = Date.now() * (Math.random() * (10 - 1) + 1) * 1000;
    if (author || commentBody !== "") {
      console.log(`${id}, ${Date.now()}, ${commentBody}, ${author}, ${postId}`);
      this.props.dispatch(
        addComment(id, Date.now(), commentBody, author, postId)
      );
      this.setState({
        author: "",
        commentBody: ""
      });
    } else alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
  }

  render() {
    const { author, commentBody } = this.state;
    return (
      <div>
        <Comment.Group>
          <Comment>
            <Comment.Content>
              <Form reply>
                <input
                  placeholder="Author"
                  value={author}
                  name="author"
                  onChange={this.handleInputChange}
                />
                <Form.TextArea
                  rows={1}
                  style={{ marginTop: "20px" }}
                  placeholder="Comment body"
                  value={commentBody}
                  name="commentBody"
                  onChange={this.handleInputChange}
                />
                <Button
                  style={{ marginBottom: "20px" }}
                  content="Send"
                  labelPosition="left"
                  icon="send"
                  inverted
                  color="green"
                  onClick={() => this.handleSubmit()}
                />
              </Form>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </div>
    );
  }
}
export default connect()(NewComment);
