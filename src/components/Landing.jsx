import React, { Component } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import Searchbar from "./Searchbar";

export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Searchbar />
          {/* {(!this.props.type) ? <Searchbar /> : <Searchbar cond="true" />} */}
        <Categories />
        <ItemList type={this.props.type} />
      </React.Fragment>
    );
  }
}
