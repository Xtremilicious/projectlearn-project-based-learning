import React, { Component } from 'react';
import Searchbar from "./Searchbar";
import ItemList from "./ItemList";

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
            <Searchbar/>
            <ItemList/>
            </React.Fragment>
        )
    }
}
