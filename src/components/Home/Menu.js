import React, { Component } from "react";
import Img from "gatsby-image";

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category;
  });

  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  return categories;
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }

  handleItems = category => {
    let tempItems = [...this.state.items];

    if(category === 'all') {
      this.setState(() => {
        return {coffeeItems: tempItems};
      });
    } else {

    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
          
          </div>
        </section>
      );
    }
  }
}