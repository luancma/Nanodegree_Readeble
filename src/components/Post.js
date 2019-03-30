import React from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    console.log(this.props.postDetails);
    return (
      <div>
        <Link
          to={`/${this.props.postDetails.category}/${
            this.props.postDetails.id
          }`}
          style={{ color: "black" }}
        >
          <Card.Group>
            <Card fluid color="green" style={{ padding: "25px" }}>
              <h1>{this.props.postDetails.title}</h1>
              <p>{this.props.postDetails.author}</p>
            </Card>
          </Card.Group>
        </Link>
      </div>
    );
  }
}

export default connect()(Post);
