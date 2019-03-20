import React from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    console.log(this.props.postDetails);
    return (
      <div>
        <Link to={`Post/${this.props.postDetails.id}`}>Link</Link>
        <Card.Group>
          <Card fluid color="green" style={{ padding: "25px" }}>
            {this.props.postDetails.body}
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default connect()(Post);
