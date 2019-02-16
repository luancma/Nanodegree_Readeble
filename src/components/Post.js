import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Post = props => (
  <Card.Group>
    <Card fluid color="red" style={{ padding: "25px" }}>
      <h1>
        <Link style={{ color: "Black" }} to={`/Post/${props.post.id}`}>
          {props.post.title}
        </Link>
      </h1>
      <p>{props.post.body}</p>
    </Card>
  </Card.Group>
);

export default Post;
