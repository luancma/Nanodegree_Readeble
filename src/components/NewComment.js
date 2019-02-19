import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
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
      <Form>
        <Form.Field>
          <label>Author</label>
          <h1> Criar novo comentário : </h1>
          <input
            placeholder="Author"
            value={author}
            name="author"
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            placeholder="Comment body"
            value={commentBody}
            name="commentBody"
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Button inverted color="green" onClick={() => this.handleSubmit()}>
          Send comment
        </Button>
      </Form>
    );
  }
}
export default connect()(NewComment);
