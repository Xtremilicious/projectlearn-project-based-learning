import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import styled from "styled-components";
import { ProductConsumer } from "../Context";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }
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
      <ProductConsumer>
        {value => {
          const { handleSearch} = value;
          return (
            <SearchWrapper className="p-0 mt-0">


              <div className="search-bar d-flex align-items-center">
                <span className="p-2">
                  <i className="fa fa-search nav-font"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search for a technology or a project. Eg. React"
                  value={this.state.search}
                  onChange={this.updateSearch}
                  class="input-form"
                ></input>
                <input
                  type="text"
                  placeholder="Eg. React"
                  value={this.state.search}
                  onChange={this.updateSearch}
                  class="input-form-mob"
                ></input>
                <Link to="/" className="ml-auto">
                  <button
                    type="button"
                    className="submit-btn"
                    onClick={() => handleSearch(this.state.search)}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </SearchWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const SearchWrapper = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
    }
  .search-bar {
    background: #e6e6e6;
    border: 1px dashed #bdbdbd;
    width: 40%;
  }
  .nav-font {
    font-size: 1.4rem;
  }
  .navbar-navigation {
    list-style: none;
    display: block;
  }
  .input-form {
    width: 100%;
    background: transparent;
    border: none;
  }
  .input-form-mob {
    width: 100%;
    background: transparent;
    border: none;
    display: none;
  }
  .submit-btn {
    min-height: 3rem;
    padding: 0 1rem;
    border: none;
    background: #0f9d58;
    color: var(--mainWhite);
  }
  @media only screen and (max-width: 1200px) {
    .search-bar {
      width: 85%;

    }
    .input-form-mob{
      display: inline;
    }
    .input-form{
      display: none;
    }
  }
`;
export default Searchbar;
