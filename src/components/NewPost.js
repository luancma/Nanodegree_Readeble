import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, TextArea, FormField, Button } from "semantic-ui-react";
import Axios from "axios";
import { actionAddPostSuccess } from "../store/actions/posts";
import { connect } from "react-redux";

class NewPost extends Component {
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
    const { title, author, textBody, category } = this.state;
    const id = Date.now() * Math.floor(Math.random() * 10 + 1);
    const timestamp = Date.now();
    this.props.dispatch(
      actionAddPostSuccess(id, timestamp, title, author, textBody, category)
    );
    this.resetState();
  }
  resetState = () => {
    this.setState({
      title: "",
      author: "",
      textBody: "",
      category: "",
      redirect: true
    });
  };

  render() {
    const { title, author, textBody, category, redirect } = this.state;
    return (
      <div>
        {redirect === false ? (
          <Form>
            <div className="form-group">
              <select
                className="form-control"
                value={this.state.categories}
                onChange={e => this.setState({ category: e.target.value })}
              >
                {this.state.category === "" ? (
                  <option> </option>
                ) : (
                  <option>{this.state.category}</option>
                )}
                {this.state.categories.map(item => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
                ;
              </select>
            </div>
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
              onClick={() =>
                this.createNewPost(author, title, textBody, category)
              }
            >
              Submit
            </Button>
          </Form>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}
export default connect()(NewPost);
