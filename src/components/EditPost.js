import React, { Component } from "react";
import { Form, TextArea, FormField, Button } from "semantic-ui-react";
import Axios from "axios";
import { connect } from "react-redux";
import { actionFetchPostById, fetchAllPosts } from "../store/actions/posts";

class EditPost extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: ""
  };

  componentDidMount() {
    this.props.dispatch(actionFetchPostById(this.props.match.params.id));
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body,
      author: this.props.post.author,
      category: this.props.post.category
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEditPost = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form>
        {JSON.stringify(this.state)}
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          name="author"
          onChange={this.handleInputChange}
          value={this.state.author}
        />
        <br />
        <input
          name="body"
          onChange={this.handleInputChange}
          value={this.state.body}
        />
        <button onClick={() => console.log(this.state)}>Enviar</button>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps)(EditPost);
