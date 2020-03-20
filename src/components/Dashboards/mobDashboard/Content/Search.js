import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: ""
      };
    
      updateSearch = event => {
        event.preventDefault();
        const query = event.target.value;
        this.setState(() => {
          return {
            search: query
          };
        });
      };
    render() {
        return (
            <div className="search-container">
            <form  onSubmit={() => handleSearch(this.state.search)}>
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch}
                placeholder="Search"
              />
              <button
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )
    }
}
