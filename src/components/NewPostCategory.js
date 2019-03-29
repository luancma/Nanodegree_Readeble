import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, TextArea, FormField, Button, Card } from "semantic-ui-react";
import Axios from "axios";
import { actionAddPostSuccess } from "../store/actions/posts";
import { connect } from "react-redux";

class NewPostCategory extends Component {
  state = {
    author: "",
    title: "",
    textBody: "",
    categories: [],
    category: "",
    redirect: false
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/categories", {
      headers: { Authorization: true }
    })
      .then(response => {
        const categories = response.data.categories;
        this.setState({ categories });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNewPost() {
    const { title, author, textBody } = this.state;
    const id = Date.now() * Math.floor(Math.random() * 10 + 1);
    const timestamp = Date.now();
    this.props.dispatch(
      actionAddPostSuccess(
        id,
        timestamp,
        title,
        author,
        textBody,
        this.props.match.params.category
      )
    );
    this.resetState();
  }
  resetState = () => {
    this.setState({
      title: "",
      author: "",
      textBody: "",
      redirect: true
    });
  };

  render() {
    const { title, author, textBody, redirect } = this.state;
    return (
      <div>
        {redirect === false ? (
          <Card.Group>
            <Card fluid color="green" style={{ padding: "25px" }}>
              <Form>
                <Form.Field>
                  <h1>{this.props.match.params.category}</h1>
                </Form.Field>
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
                  style={{ marginBottom: "20px" }}
                  content="Send"
                  labelPosition="left"
                  icon="edit"
                  inverted
                  color="green"
                  onClick={() => this.createNewPost(author, title, textBody)}
                />
              </Form>
            </Card>
          </Card.Group>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}
export default connect()(NewPostCategory);
