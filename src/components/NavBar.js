import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { actionGetAllCategories } from "../store/actions/categories";
import { Dropdown, Menu, Segment } from "semantic-ui-react";

class Nav extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionGetAllCategories());
  }
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="home">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item name="messages">
            <NavLink to="/newPost" exact activeClassName="active">
              New Post
            </NavLink>
          </Menu.Item>
          <Menu.Menu>
            <Dropdown item text="Category">
              <Dropdown.Menu>
                {this.props.categories.map(item => (
                  <NavLink key={item.path} to={`/${item.path}`}>
                    <Dropdown.Item style={{ color: "black" }}>
                      {item.path}
                    </Dropdown.Item>
                  </NavLink>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Nav);
