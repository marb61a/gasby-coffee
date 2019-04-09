import React, { Component } from 'react';
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";

export default class Navbar extends Component {
  state = {  
    navbarOpen: false,
    css: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/about",
        text: "about"
      }
    ]
  };

  navbarHandler = () => {
    this.state.navbarOpen ?
    this.setState({
      navbarOpen: false,
      css: "collapse navbar-collapse"
    }) :
    this.setState({
      navbarOpen: true,
      css: "collapse navbar-collapse show"
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
        
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="">
        
        </div>
      </nav>
    );
  }
}
