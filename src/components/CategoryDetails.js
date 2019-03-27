import React, { Component } from "react";

class CategoryDetails extends Component {
  render() {
    return (
      <div>
        <h1>Detalhes da categoria {this.props.match.params.category}</h1>
      </div>
    );
  }
}
export default CategoryDetails;
