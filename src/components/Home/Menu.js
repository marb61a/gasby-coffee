import React, { Component } from "react";
import Img from "gatsby-image";

const getCategories = items => {

};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: getCategories
    }
  }

  render() {
    return (
      <section>
        <div className="container">
        
        </div>
      </section>
    );
  }
}