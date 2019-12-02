import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../Context";

class Navbar extends Component {
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
          const { resetSearch } = value;
          return (
            <NavWrapper className="py-1  m-0 row">
              
                {/* <img
                  src={logo}
                  alt="store"
                  className="navbar-brand nav-logo"
                  
                /> */}
                <div
                  className="d-flex align-items-center nav-name col-6 "
                  onClick={() => {
                    resetSearch();
                    this.setState(() => {
                      return {
                        search: ""
                      };
                    });
                  }}
                >
                  <Link to="/" className="nav-name">
                  <span className="text-green">Project</span>
                  <span className="text-black">Learn</span>
                  </Link>
                </div>
              
              <div className="d-flex align-items-center justify-content-end col-6 nav-links">
                <div></div>
              </div>
            </NavWrapper>
          );
        }}
        
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  display: flex;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  .nav-name {
    font-size: 2.8rem;
    font-weight: bold;
    text-decoration: none;
  }
  .nav-links {
    font-size: 1.4rem;
  }
  .text-green {
    color: #0f9d58;
  }
  .text-black {
    color: black;
  }
  .search-bar {
    background: #e6e6e6;
    border: 1px solid #bdbdbd;
    width: 40%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav-font {
    font-size: 1.4rem;
  }
  .navbar-navigation {
    list-style: none;
    display: block;
  }
  .input-form {
    width: 49vw;
    background: transparent;
    border: none;
  }
  .submit-btn {
    height: 3.3rem;
    width: 7vw;
    border: none;
    background: #0f9d58;
    color: var(--mainWhite);
  }
  @media only screen and (max-width: 1200px) {
  }
`;
export default Navbar;
