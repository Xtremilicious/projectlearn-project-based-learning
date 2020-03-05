import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GitHubButton from "react-github-btn";

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
            <NavWrapper className="pt-3 pb-3 m-0 row">
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
                  <h1 className="nav-name">
                    <span className="text-green2">Project</span>
                    <span className="text-black">Learn.io</span>
                  </h1>
                </Link>
              </div>

              <div className="d-flex align-items-center justify-content-end col-6 nav-links">
                <div className="d-flex flex-column align-items-center">
                  <a
                    href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button text-center d-flex flex-row align-items-center"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    <div className="text-green2 contr">Contribute</div>
                  </a>

                  <GitHubButton
                    href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star ProjectLearn on GitHub"
                  >
                    {` `}Star
                  </GitHubButton>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  background: transparent;
  z-index: 100;
  margin-bottom: 10rem;
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
  .text-white {
    color: white;
  }
  .text-green {
    color: #0f9d58;
  }
  .text-green2 {
    color: #0f9d58;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .text-black {
    color: black;
  }
  .button {
    justify-content: flex-end;
    color: black;
    font-size: 2.3rem;
  }
  /* .button:hover {
    color: #424242;
    transition: 0.6s;
  } */
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
    border: none;
    background: #0f9d58;
    color: var(--mainWhite);
  }
  .contr {
    font-size: 2rem;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  @media only screen and (max-width: 1200px) {
    .nav-name {
      font-size: 1.8rem;
      font-weight: bold;
      text-decoration: none;
    }
    .button {
      justify-content: center;
      color: #424242;
      font-size: 1.6rem;
    }
    .contr {
      display: none;
    }
  }
`;
export default Navbar;
