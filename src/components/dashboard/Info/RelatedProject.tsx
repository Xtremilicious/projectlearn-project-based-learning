import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  faVideo,
  faNewspaper,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectWrapper = styled.div`
  margin-bottom: 4vh;
  .project-grid-items {
    display: flex;
    position: relative;
    border-radius: 1vh;
    flex-direction: column;
    padding: 1.1vw;
    background-color: white;
    transition: 0.4s;
    border-top: 4px solid var(--dashboard-purple-alt);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
    border-top: 4px solid var(${(props) => props.bg}-alt);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 10.93%,
      rgba(255, 255, 255, 0) 90%
    );
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      color: white;
      .cat-art {
        //background-color: var(--dashboard-purple-alt);
        //box-shadow: none !important;
      }
      .tag {
        //background-color: var(--dashboard-purple-alt);
        //box-shadow: none !important;
      }
      .link {
        color: white;
      }
    }
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    .details-1 {
      display: flex;
      .main-cat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3vh;
        .svg-inline--fa {
          font-size: 2vw;
          padding: 1vh;
        }
        .cat-art {
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
          border-radius: 1vh;
          height: 4vw;
          width: 4vw;
          padding: 1.5vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 10.93%,
            rgba(255, 255, 255, 0) 90%
          );
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
          border-top: 4px solid var(${(props) => props.bg}-alt);
        }
        .cat-title {
          margin-top: 0.5vh;
          font-size: 1vw;
        }
      }
      .date-added {
        margin-left: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        .section-title {
          font-size: 1vw;
          height: fit-content;
          padding: 0;
        }
        .date-value {
          font-size: 1.2vw;
        }
      }
    }
    .details-2 {
      font-size: 1.5vw;
      margin: 0;
      margin-bottom: 3vh;
      font-weight: normal;
    }
    .details-3 {
      margin-top: auto;
      .section-title {
        font-size: 1.2vw;
        font-weight: 100;
        height: fit-content;
        padding: 0;
      }
      .tags-container {
        margin-top: 1vh;
        flex-flow: row wrap;
        line-height: 170%;
        word-wrap: normal;
        .tag {
          cursor: pointer;
          //border: 1px dashed var(--dashboard-purple-alt);
          width: fit-content;
          margin-right: 0.7vw;
          padding: 0.1vw 0.6vw;
          border-radius: 1vh;
          font-size: 1.2vw;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
        }
      }
    }
    .link {
      position: absolute;
      font-size: 1.4vw;
      bottom: 1vh;
      right: 1vh;
      cursor: pointer;
      z-index: 10;
    }
  }
`;

const PostLink = (props) => (
  <Link
    href={`/learn/${props.url}/project/[id]`}
    as={`/learn/${props.url}/project/${props.title}-${props.id}`}
  >
    <div className="link">
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
  </Link>
);

export default class Content extends Component {
  render() {
    const {
      id,
      type,
      title,
      category,
      subCategory,
      tech,
      description,
      source,
      datePublished,
      projectURL,
      submittedBy,
    } = this.props.project;

    const appIcon = (
      <React.Fragment>
        {type === "video" ? (
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

    const date = new Date(datePublished); // 2009-11-10
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    let urlTitle = title.toLowerCase().split(" ").join("-");

    return (
      <ProjectWrapper>
         <Link
            href={`/learn/${this.props.slug}/project/[id]`}
            as={`/learn/${this.props.slug}/project/${urlTitle}-${id}`}
          >
        <div className="project-grid-items">
        
         
            <div className="details-1">
              <div className="main-cat">
                <div className="cat-art">{appIcon}</div>
              </div>
              <div className="date-added">
                <div className="section-title">Date Published</div>
                <div className="date-value">{`${day} ${month} ${year}`}</div>
              </div>
            </div>
            <h2 className="details-2">{title}</h2>
            <div className="details-3">
              <div className="section-title">Top Technologies:</div>
              <div className="tags-container">
                {tech.slice(0, 3).map((t) => (
                  <Link
                    href={{
                      pathname: `../../${this.props.slug}`,
                      query: { tech: t },
                    }}
                    key={t}
                  >
                    <span className="tag">{t} </span>
                  </Link>
                ))}
              </div>
            </div>
          
        </div>
        </Link>
        {/* </a> */}
      </ProjectWrapper>
    );
  }
}
