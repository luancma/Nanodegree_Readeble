import React, { Component } from "react";
import { Form, TextArea, FormField, Button } from "semantic-ui-react";
import { createPost } from "../utils/apiTeste";

class NewPost extends Component {
  state = {
    author: "",
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNewPost() {
    const { title, author, textBody } = this.state;
    const id = Date.now() * Math.floor(Math.random() * 10 + 1);
    const timestamp = Date.now();
    createPost(id, timestamp, title, author, textBody);
    this.resetState();
  }
  resetState = () => {
    this.setState({
      title: "",
      author: "",
      textBody: ""
    });
  };

  render() {
    const { title, author, textBody } = this.state;
    return (
      <Form>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="First Name"
            name="author"
            value={author}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <FormField>
          <TextArea
            placeholder="Text body"
            name="textBody"
            value={textBody}
            onChange={this.handleInputChange}
          />
        </FormField>
        <Button
          color="green"
          type="submit"
          onClick={() => this.createNewPost(title, author, textBody)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}
export default NewPost;
