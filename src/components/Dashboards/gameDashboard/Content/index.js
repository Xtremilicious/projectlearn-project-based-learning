import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ProjectList from "./ProjectList";

//Redux Stuff
import { connect } from "react-redux";

const ContentWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: auto;
  grid-template-rows: 30vh auto;
  .dummy {
    position: fixed;
    z-index: -1;
    height: 30vh;
    width: 75vw;
    background: linear-gradient(
      90deg,
      var(--dashboard-purple),
      var(--dashboard-purple-alt)
    );
  }
  .section-header {
    display: flex;
    background: linear-gradient(
      90deg,
      var(--dashboard-purple),
      var(--dashboard-purple-alt)
    );
    color: white;
    .section-title {
      font-size: 5vh;
      padding: 4vh 4vh 0 4vh;
      font-weight: normal;
      margin: 0;
    }
    .section-sub-title {
      padding: 1vh 4vh;
      font-weight: 100;
    }
  }
  .search-container {
    margin-top: 5vh;
    margin-right: 5vh;
    margin-left: auto;
    .search-bar{
      padding: 1vh;
      font-size: 3vh;
      border-radius: 3vh;
      border: none;
      padding-left: 2.5vh;
      box-shadow: rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px;
      outline: none;
    }
  }
  .mobile-title {
    display: none;
  }
  .back-to-landing {
    display: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .headers {
      display: none;
    }
    .dummy {
      width: 100vw;
    }
    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5vh auto;
    }
    .mobile-title {
      display: block;
      display: flex;
      justify-content: center;
      font-size: 4vh;
      margin-bottom: 2vh;
    }
    .search-bar {
      font-size: 2.5vh !important;
    }
    .back-to-landing {
      display: block;
      position: absolute;
      top: 1.5vh;
      left: 2vh;
      font-size: 3vh;
      cursor: pointer;
    }
  }
`;

class Content extends Component {

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
    let { projects } = this.props;

    projects
      ? (projects = projects
          .filter(project => project.category.includes("game-dev"))
          .map(item => item))
      : null;

    if (this.state.search != "") {
      projects = projects
        .filter(project => {
          return (
            project.title
              .toLowerCase()
              .indexOf(this.state.search.toLowerCase()) !== -1 ||
            project.tech.some(t => {
              return (
                t.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
              );
            }) === true
          );
        })
        .map(item => item);
    }

    return (
      <ContentWrapper>
        <Link href="../../#categories">
          <div className="back-to-landing">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        <div className="dummy" />
        <div className="section-header">
          <div className="headers">
            <h1 className="section-title">Game Development</h1>
            <div className="section-sub-title">
              {projects ? projects.length : null} Projects
            </div>
          </div>
          <div className="search-container">
          <div className="mobile-title">Game Development</div>
            <input
            className="search-bar"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch}
              placeholder="Search"
            />
          </div>
        </div>

        <ProjectList projects={projects} />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};



export default connect(mapStateToProps, {})(Content);
