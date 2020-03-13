import React, { Component } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import Searchbar from "./Searchbar";
import Footer from "./Footer";

export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Searchbar />
          {/* {(!this.props.type) ? <Searchbar /> : <Searchbar cond="true" />} */}
        <Categories />
        <ItemList type={this.props.type} />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
