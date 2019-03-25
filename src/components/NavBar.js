import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";

class NavBar extends Component {
  state = {
    categories: [],
    redirect: false,
    category: ""
  };

  componentDidMount() {
    Axios.get(`http://localhost:3001/categories`, {
      headers: { Authorization: "dasodka" }
    }).then(response => {
      this.setState({
        categories: response.data.categories
      });
    });
  }

  goToPageDetails = path => {
    this.setState({
      redirect: true,
      category: path
    });
  };

  render() {
    return (
      <div>
        {this.state.redirect === true ? (
          <Redirect to={`Category/${this.state.category}`} />
        ) : (
          <div>
            <ul>
              {this.state.categories.map(item => (
                <li>
                  <button onClick={() => this.goToPageDetails(item.path)}>
                    {item.path}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(NavBar);
