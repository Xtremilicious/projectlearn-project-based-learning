import React, { Component } from "react";
import styled from "styled-components";

import ProjectList from "./ProjectList";

//Redux Stuff
import { connect } from "react-redux";
import { getProjects } from "../../../redux/actions/dataActions";
import { useRouter, withRouter } from "next/router";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ContentWrapper = styled.div`
  display: grid;
  width: auto;
  min-height: 100vh;
  grid-template-rows: auto auto;
  .dummy {
    position: fixed;
    z-index: 0;
    height: 30vh;
    width: 80vw;
    background: linear-gradient(
      90deg,
      var(${(props) => props.bg}),
      var(${(props) => props.bg}-alt)
    );
    backdrop-filter: blur(10px);
  }
  .section-header {
    display: flex;
    background: linear-gradient(
      90deg,
      var(${(props) => props.bg}),
      var(${(props) => props.bg}-alt)
    );
    backdrop-filter: blur(10px);
    color: ${(props) => props.color};
    position: fixed;
    z-index: 100;
    width: 79vw;
    padding-bottom: 4vh;
    .section-title {
      font-size: 2vw;
      padding: 4vh 4vh 0 4vh;
      font-weight: normal;
      margin: 0;
    }
    .section-sub-title {
      padding: 1vh 4vh;
      font-weight: 100;
      font-size: 2.7vh;
    }
  }
  .search-container {
    margin-top: 5vh;
    margin-right: 5vh;
    margin-left: auto;
    .search-bar {
      padding: 1vh;
      font-size: 1.3vw;
      border-radius: 3vh;
      border: none;
      padding-left: 2.5vh;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
      outline: none;
    }
  }
  .mobile-title {
    display: none;
  }
  .back-to-landing,
  .mobile-filter-reset {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    .headers {
      display: none;
    }
    .section-header {
      position: fixed;
      width: 100vw;
      padding-bottom: 3vh;
    }
    .dummy {
      width: 100vw;
      height: 35vh;
    }
    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5vh auto;
      margin-bottom: 0;
    }
    .mobile-title {
      display: block;
      display: flex;
      justify-content: center;
      font-size: 7vw;
      margin-bottom: 2vh;
    }
    .mobile-filter-reset {
      display: flex;
      align-items: center;
      font-size: 7vw;
      margin-top: 3vh;
      .cat-title {
        background: var(${(props) => props.bg}-alt);
        padding: 1vh;
        border-radius: 1vh;
        font-size: 7vw;
      }
      .clear {
        text-decoration: underline;
        margin-left: 2vw;
      }
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
      z-index: 110;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .headers {
      display: none;
    }
    .section-header {
      position: fixed;
      width: 100vw;
      padding-bottom: 3vh;
    }
    .dummy {
      width: 100vw;
      height: 35vh;
    }
    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5vh auto;
      margin-bottom: 0;
    }
    .mobile-title {
      display: block;
      display: flex;
      justify-content: center;
      font-size: 3.5vh;
      margin-bottom: 2vh;
    }
    .mobile-filter-reset {
      display: flex;
      align-items: center;
      font-size: 3.5vh;
      margin-top: 3vh;
      .cat-title {
        background: var(${(props) => props.bg}-alt);
        padding: 1vh;
        border-radius: 1vh;
        font-size: 3.5vh;
      }
      .clear {
        text-decoration: underline;
        margin-left: 2vw;
      }
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
      z-index: 110;
    }
  }
`;

class Content extends Component {
  state = {
    search: "",
  };

  updateSearch = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.setState(() => {
      return {
        search: query,
      };
    });
  };

  resetSearch = () => {
    this.setState(() => {
      return {
        search: "",
      };
    });
  };

  render() {
    const {
      query: { tech },
    } = this.props.router;

    const categorySlug = this.props.slug;
    const categoryTitle = this.props.title;
    const url = this.props.url;

    let { projects } = this.props;

    projects = projects
      .filter((project) => project.category.includes(categorySlug))
      .map((item) => item);

    if (this.state.search != "") {
      projects = projects
        .filter((project) => {
          return (
            project.title
              .toLowerCase()
              .indexOf(this.state.search.toLowerCase()) !== -1 ||
            project.tech.some((t) => {
              return (
                t.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
              );
            }) === true
          );
        })
        .map((item) => item);
    }

    return (
      <ContentWrapper bg={this.props.color}>
        <div className="dummy" />
        <div className="section-header">
          <Link href="../../#categories">
            <div className="back-to-landing">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Link>
          <div className="headers">
            <h1 className="section-title">{categoryTitle}</h1>
            <div className="section-sub-title">
              {projects ? projects.length : null} Projects
            </div>
          </div>

          <div className="search-container">
            <div className="mobile-title">{categoryTitle}</div>
            <input
              className="search-bar"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch}
              placeholder="Search"
            />
            <Link href={{ pathname: `${url}` }}>
              <div
                className="mobile-filter-reset"
                onClick={() => this.resetSearch()}
              >
                <div className="selected-cat">
                  <div className="cat-title">{tech || "Showing All"}</div>
                </div>
                <span className="clear"> Clear Filter</span>
              </div>
            </Link>
          </div>
        </div>

        <ProjectList projects={projects} url={url} color={this.props.color} />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.data.projects,
  };
};

export default connect(mapStateToProps, {})(withRouter(Content));
