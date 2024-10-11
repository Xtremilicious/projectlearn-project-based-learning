import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Link from "next/link";

import YouTube from "react-youtube";
import RelatedProjects from "./RelatedProjects";

import { getRandomInt, shuffle, youtubeGetID } from "../../../utils/functions";

import {
  faVideo,
  faNewspaper,
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 70vw 30vw;
  overflow-x: hidden;
  height: fit-content;
  background: var(--themeDark);
  color: #ffff;
  .video {
    margin-top: 5vh;
    display: flex;
    margin-left: 2rem;
    align-items: center;
    padding: 2rem 2rem 2rem 0;
    .video-content {
      height: 20vw;
      width: 30vw;
      border-radius: 1vh;
    }
  }
  .headings {
    height: fit-content;
    display: flex;
    padding: 2rem;
    border-radius: 2vh;
    margin: 1vh 0 0vh 1vh;
    .section-one {
      margin-top: 2vh;
      margin-right: 15vw;
    }
    .date {
      margin-top: 1vh;
      margin-bottom: 2vh;
      font-size: 3vh;
    }
    .project-title {
      font-size: 7vh;
      margin: 0;
    }
    .project-category {
      font-size: 3vh;
      cursor: pointer;
      color: var(--button-blue);
    }
    .tags-container {
      margin-top: 1vh;
      flex-flow: row wrap;
      display: flex;
      word-wrap: break-word;
      .tag {
        cursor: pointer;
        width: fit-content;
        margin-right: 0.7vw;
        margin-bottom: 0.7vw;
        padding: 0.2vw 0.6vw;
        border-radius: 1vh;
        font-size: 1.15vw;
        transition: 0.4s;
        border: 1px dashed var(--dashboard-purple-alt);
        &:hover {
          border: 1px solid var(--dashboard-purple-alt);
        }
      }
    }
    .section-two {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-bottom: 3vh;
      .svg-inline--fa {
        font-size: 2vw;
        padding: 0.5vh;
      }
      .cat-art {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius: 1vh;
        height: 4.5vw;
        width: 4.5vw;
        padding: 1.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
        border-top: 4px solid var(${(props) => props.bg}-alt);
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 10.93%,
          rgba(255, 255, 255, 0) 90%
        );
      }
      .cat-title {
        margin-top: 0.5vh;
        font-size: 1.2vw;
      }
    }
  }
  .description {
    margin-left: 2rem;
    width: 80%;
    font-size: 3vh;
    margin-bottom: 2rem;
  }
  .description-title {
    margin-left: 2rem;
    width: 93%;
    font-size: 4vh;
    font-weight: 600;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #f2f2f2;
  }
  .external-link-container {
    width: fit-content;
    display: flex;
    font-size: 3vh;
  }
  .external-link {
    background: var(--button-blue);
    padding: 2vh;
    color: white;
    border-radius: 1vh;
    margin-left: 2rem;
    margin-top: 0.5rem;
    width: fit-content;
  }
  .back-to-landing {
    position: absolute;
    top: 1.5vh;
    left: 2vh;
    font-size: 3vh;
    cursor: pointer;
  }
  .bg-red {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--button-blue);
  }
  .modal-window {
    position: fixed;
    background-color: rgba(200, 200, 200, 0.75);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .modal-window:target {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-window > div {
    width: fit-content;
    position: relative;
    margin: 6% auto;
    padding: 1rem;
    background: #fff;
    color: #444;
    border-radius: 1vh;
  }

  .modal-window header {
    font-weight: bold;
  }

  .modal-close {
    color: black;
    font-size: 2rem;
    position: absolute;
    right: 4px;
    text-align: center;
    top: 4px;
    background: white;
    text-decoration: none;
    border-radius: 50%;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
  }

  .modal-close:hover {
    color: #000;
  }

  .modal-window h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    .related {
      display: none;
    }
    .headings {
      margin: unset;
      .section-one {
        margin-top: 2vw;
        margin-right: 2vw;
      }
      .date {
        font-size: 4.5vw !important;
      }
      .project-title {
        font-size: 10vw;
      }
      .project-category {
        font-size: 4.5vw;
      }
      .tags-container {
        .tag {
          font-size: 3.5vw;
          margin-right: 2vw;
          padding: 0vw 2vw;
          line-height: 200%;
          margin-bottom: 2vw;
        }
      }
      .section-two {
        display: none;
      }
    }
    .video-content {
      height: 40vw !important;
      width: 70vw !important;
      border-radius: 1vh;
    }
    .modal-window > div {
      margin: 10% auto !important;
    }
    .description {
      font-size: 4.5vw;
    }

    .external-link-container {
      font-size: 4vw;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-columns: 1fr;
    .related {
      display: none;
    }
    .headings {
      margin: unset;
      .section-one {
        margin-top: 2vw;
        margin-right: 2vw;
      }
      .date {
        font-size: 4vw !important;
      }
      .project-title {
        font-size: 8vw;
      }
      .project-category {
        font-size: 4.5vw;
      }
      .tags-container {
        .tag {
          font-size: 3.5vw;
          margin-right: 2vw;
          padding: 0vw 2vw;
          line-height: 200%;
          margin-bottom: 2vw;
        }
      }
      .section-two {
        display: none;
      }
    }
    .video-content {
      height: 40vw !important;
      width: 70vw !important;
      border-radius: 1vh;
    }
    .modal-window > div {
      margin: 10% auto !important;
    }
    .description {
      font-size: 4vw;
    }
    .external-link-container {
      font-size: 4vw;
    }
  }
`;
function ProjectInfo(props) {
  const { project } = props;

  const category =
    props.slug === "web-development"
      ? "web-dev"
      : props.slug === "mobile-development"
      ? "mob-dev"
      : props.slug === "game-development"
      ? "game-dev"
      : "ml-ai";

  const relatedProjects = props.projects
    .filter(
      (filteredProject) =>
        filteredProject.category.includes(category) &&
        filteredProject.id !== project.id
    )
    .map((item) => item);

  const range = getRandomInt(relatedProjects.length - 2);

  const date = new Date(project.datePublished);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const youtubeRegex =
    /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;

  const appIcon = (
    <React.Fragment>
      {project.type === "video" ? (
        <React.Fragment>
          <FontAwesomeIcon icon={faVideo} />
          <div className="cat-title">Video</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FontAwesomeIcon icon={faNewspaper} />
          <div className="cat-title">Article</div>
        </React.Fragment>
      )}
    </React.Fragment>
  );

  return (
    <ProjectInfoWrapper>
      <div style={{ height: "fit-content" }}>
        <Link href="../">
          <div className="back-to-landing">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        <div className="headings">
          <div className="section-one">
            <Link href="../">
              <div className="project-category">
                {props.projectCategory} Project
              </div>
            </Link>
            <h1 className="project-title">{project.title}</h1>
            <div className="date">
              Date Published: {`${day} ${month} ${year}`}
            </div>
            <div className="tags-container">
              {project.tech.map((t) => (
                <Link
                  href={{
                    pathname: `../../${props.slug}`,
                    query: { tech: t },
                  }}
                  key={t}
                >
                  <span className="tag">{t} </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="section-two">
            <div className="main-cat">
              <div className="cat-art">{appIcon}</div>
            </div>
          </div>
        </div>
        <div className="description-title">Description</div>
        <div className="description">
          Learn {props.projectCategory} by building the project {project.title}{" "}
          using concepts and technologies like{" "}
          {project.tech.map((t) => t).join(", ")} and more!
        </div>
        <div className="description-title">Project Link</div>
        <div className="external-link-container">
          {/* {youtubeRegex.test(project.projectURL) ? (
            <React.Fragment>
              <span href="#watch-video" className="external-link-container">
                <div className="external-link bg-red">Watch Video</div>
              </span>
              <div id="watch-video" className="modal-window">
                <div>
                  <a href="" title="Close" className="modal-close">
                    &times;
                  </a>
                  <YouTube
                    videoId={youtubeGetID(project.projectURL)}
                    className="video-content"
                  />
                </div>
              </div>
            </React.Fragment>
          ) : null} */}
          <a
            href={project.projectURL}
            className="external-link-container"
            target="_blank"
          >
            <div className="external-link">
              External Link <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        </div>
      </div>
      <div className="related">
        <RelatedProjects
          projects={shuffle(relatedProjects.slice(range, range + 3))}
          slug={props.slug}
        />
      </div>
    </ProjectInfoWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.data.projects,
  };
};

export default connect(mapStateToProps, {})(ProjectInfo);
