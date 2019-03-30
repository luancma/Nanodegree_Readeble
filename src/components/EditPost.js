import React, { Component } from "react";
import { Form, TextArea, FormField, Button, Card } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  actionFetchPostById,
  fetchAllPosts,
  actionEditPost
} from "../store/actions/posts";

class EditPost extends Component {
  state = {
    id: "",
    title: "",
    body: "",
    author: "",
    category: "",
    toHomePage: false
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props
      .dispatch(actionFetchPostById(this.props.match.params.id))
      .then(item =>
        this.setState({
          id: this.props.post.id,
          title: this.props.post.title,
          body: this.props.post.body,
          author: this.props.post.author,
          category: this.props.post.category
        })
      );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEditPost = e => {
    const { id, title, body } = this.state;
    e.preventDefault();
    this.props.dispatch(actionEditPost(id, title, body));
    this.setState({ toHomePage: true });
  };

  render() {
    return (
      <div>
        {this.state.toHomePage === false ? (
          <Card.Group>
            <Card fluid color="green" style={{ padding: "25px" }}>
              <Form>
                <div className="form-group">
                  <Form.Field>
                    <label>Category</label>
                    <input disabled value={this.props.post.category} />
                  </Form.Field>
                </div>
                <Form.Field>
                  <label>Author</label>
                  <input
                    disabled
                    name="author"
                    onChange={this.handleInputChange}
                    value={this.state.author}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Title</label>
                  <input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                </Form.Field>
                <FormField>
                  <label>Body</label>
                  <TextArea
                    placeholder="Text body"
                    name="body"
                    value={this.state.body}
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
                  onClick={e => this.handleEditPost(e)}
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
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps)(EditPost);
