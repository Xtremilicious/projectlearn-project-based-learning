import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Link from "next/link";

import YouTube from "react-youtube";
import RelatedProjects from "./RelatedProjects";

import { getRandomInt, shuffle } from "../../../../utils/functions";

import {
  faVideo,
  faNewspaper,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 70vw 30vw;
  overflow-x: hidden;
  height: 100vh;
  .video {
    margin-top: 5vh;
    display: flex;
    margin-left: 2rem;
    align-items: center;
    .video-content {
      height: 50vh;
      width: 90vh;
      border-radius: 1vh;
    }
    .external-link {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  .headings {
    height: fit-content;
    display: flex;
    padding: 2rem;
    border-radius: 2vh;
    margin: 1vh 0 1vh 1vh;
    .section-one {
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
      margin-bottom: 1vh;
    }
    .tags-container {
      margin-top: 1vh;
      flex-flow: row wrap;
      line-height: 170%;
      word-wrap: normal;
      .tag {
        cursor: pointer;
        background-color: var(--dashboard-purple-alt);
        color: white;
        width: fit-content;
        margin-right: 0.7vw;
        padding: 0.1vw 0.6vw;
        border-radius: 1vh;
        font-size: 1.2vw;
      }
    }
    .section-two {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-bottom: 3vh;
      .svg-inline--fa {
        font-size: 3vw;
        padding: 1vh;
      }
      .cat-art {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius: 1vh;
        height: 6vw;
        width: 6vw;
        padding: 1.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .cat-title {
        margin-top: 0.5vh;
        font-size: 1.5vw;
      }
    }
  }
`;
function ProjectInfo(props) {
  const { project } = props;
  const webDevProjects = props.projects
    .filter(
      filteredProject =>
        filteredProject.category.includes("web-dev") &&
        filteredProject.id != project.id
    )
    .map(item => item);

  const range = getRandomInt(webDevProjects.length - 2);

  const date = new Date(project.datePublished); // 2009-11-10
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  function YouTubeGetID(url) {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }

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
      <div>
        {project.type === "video" ? <div className="video">
          <YouTube
            videoId={YouTubeGetID(project.projectURL)}
            className="video-content"
          />
          <div className="external-link">
            {" "}
            <a href={project.projectURL} className="external-link-content">
              External Link
            </a>
          </div>
        </div> : null}
        <div className="headings">
          <div className="section-one">
            <div className="project-category">Web Development Project</div>
            <h1 className="project-title">{project.title}</h1>
            <div className="date">
              Date Published: {`${day} ${month} ${year}`}
            </div>
            <div className="tags-container">
              {project.tech.map(t => (
                <Link
                  href={{
                    pathname: "../../web-development",
                    query: { tech: t }
                  }}
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
      </div>

      <RelatedProjects
        projects={shuffle(webDevProjects.slice(range, range + 3))}
      />
    </ProjectInfoWrapper>
  );
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};

export default connect(mapStateToProps, {})(ProjectInfo);
