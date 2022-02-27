import React, { Component, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import Circle from "../../utils/loading-spinner";

//Redux Stuff
import { connect } from "react-redux";
import { getGitHubStars } from "../../redux/actions/dataActions";

//Icons and Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faPenNib } from "@fortawesome/free-solid-svg-icons";
const NavWrapper = styled.div`
  .name {
    padding: 0 50px !important;
    cursor: pointer;
    font-size: 30px !important;
  }
  @media (max-width: 988px) {
    .name {
      font-size: 20px !important;
    }
  }
  @media (max-width: 330px) {
    .name {
      font-size: 12px !important;
    }
  }
  .nav-link:visited,
  .nav-link:link {
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .nav-link:hover,
  .nav-link:active {
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .navbar-nav > li {
    display: inline-block;
    float: none;
  }
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }
  .navbar-toggler {
    margin-right: 10px;
  }
  ,
  .nav-component {
    display: flex;
    align-items: center;
    margin-left: 2em;
    font-size: 3.3vh;
    color: #f9d9eb;
    .svg-inline--fa {
      font-size: 1.4em;
      margin-right: 0.2em;
    }
    cursor: pointer;
  }
  ,
  .gt-container {
    display: flex;
    flex-direction: row;
    background: #f9d9eb;
    color: #f9d9eb;
    border-radius: 4vh;
    padding: 0rem 0.1rem 0rem 0;
    .svg-inline--fa {
      font-size: 1.8em;
    }
  }

  @media (max-width: 988px) {
    .navbar .navbar-nav {
      display: flex;
      flex-direction: column;
      float: none;
      border: none;
      vertical-align: top;
    }

    .navbar .navbar-collapse {
      text-align: center;
    }
    .nav-link:visited,
    .nav-link:link,
    .nav-link:hover,
    .nav-link:active {
      border-bottom: 0px solid transparent;
      cursor: pointer;
    }
  }
`;
class Navbar extends Component {
  componentDidMount() {
    this.props.getGitHubStars();
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { stars } = this.props;
    return (
      <NavWrapper>
        <nav
          className="navbar navbar-expand-lg navbar-light  fixed-top bg-light mt-3 m-5 "
          style={{ backgroundColor: "black" }}
        >
          <a className="navbar-brand name" href="#">
            {/* <img src={plLogo} alt="ProjectLearn Logo" className="pl-logo" /> */}
            ProjectLearn.io
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="nav navbar-nav navbar-center">
              <Link href="/">
                <li className="nav-item nav-link active px-4">
                  <FontAwesomeIcon icon={faHome} />
                  Home<span class="sr-only">(current)</span>
                </li>
              </Link>
              <Link href="/blog">
                <li className="nav-item nav-link px-4">
                  <FontAwesomeIcon icon={faPenNib} />
                  Blog
                </li>
              </Link>
              <Link
                href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning"
                target="_blank"
                className="m-github"
              >
                <li
                  className="nav-item nav-link gt-container nav-component p-0 "
                  style={{ color: "white", backgroundColor: "black",paddingRight: "10px"+"!important"}}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {stars ? `${stars} stars` : <Circle />}
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </NavWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stars: state.data.stars,
  };
};

const mapDispatchToProps = {
  getGitHubStars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
