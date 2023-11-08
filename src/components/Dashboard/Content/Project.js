import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  faVideo,
  faNewspaper,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectWrapper = styled.div`
  .project-grid-items {
    height: calc(100% - 2.2vw) !important;
    display: flex;
    position: relative;
    border-radius: 1vh;
    flex-direction: column;
    padding: 1.1vw;
    transition: 0.4s;
    background: var(--themeDark);
    color: white;
    cursor: pointer;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
    border-top: 4px solid var(${(props) => props.bg}-alt);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 10.93%,
      rgba(255, 255, 255, 0) 90%
    );
    backdrop-filter: blur(100px);
    :hover {
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
      background-color: var(--themeDark);
      transform: scale(1.1);
      .cat-art {
        background-color: var(${(props) => props.bg}-alt);
        //box-shadow: none !important;
        color: white;
      }
      .tag {
        background-color: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 10.93%,
          rgba(255, 255, 255, 0) 90%
        );
       //box-shadow: none !important;
        color: white;
      }
      .link {
        color: black;
        transform: translateX(-0.7vh);
      }
    }
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
          transition: 0.4s;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 10.93%,
            rgba(255, 255, 255, 0) 90%
          );
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
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
        }
        .date-value {
          font-size: 1.2vw;
        }
      }
    }
    .details-2 {
      font-size: 1.3vw;
      margin: 0;
      margin-bottom: 2vh;
      font-weight: normal;
    }
    .details-3 {
      margin-top: auto;
      .section-title {
        font-size: 1.2vw;
        font-weight: 100;
      }
      .tags-container {
        margin-top: 1vh;
        display: flex;
        flex-wrap: wrap;
        row-gap: 1vh;
        min-width: 0;
        .tag {
          transition: 0.2s;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          //border: 1px solid var(${(props) => props.bg}-alt);
          //border: 1px dashed var(${(props) => props.bg}-alt);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.075);
          border-radius: 0.5vh;
          width: fit-content;
          margin-right: 0.7vw;
          padding: 0.1vw 0.6vw;
          min-width: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 1.1vw;
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
      transition: 0.2s;
      color: var(${(props) => props.bg}-alt);
    }
  }
  @media only screen and (max-width: 480px) {
    .project-grid-items {
      padding: 3vw;
    }

    .details-2 {
      font-size: 6vw !important;
      margin: 0;
      margin-bottom: 2vh;
      font-weight: normal;
    }
    .details-3 {
      .section-title {
        font-size: 4vw !important;
        margin-bottom: 1.5vh;
      }
      .tags-container {
        margin: 0 !important;
        line-height: 110% !important;
        .tag {
          margin-left: 1vw;
          padding: 0.7vw !important;
          cursor: pointer;
          font-size: 4vw !important;
        }
      }
      margin-bottom: 1vh;
    }
    .svg-inline--fa {
      font-size: 6vw !important;
      padding: 0vh !important;
    }
    .cat-title {
      font-size: 4.5vw !important;
    }
    .section-title {
      font-size: 4.5vw !important;
    }
    .date-value {
      font-size: 5vw !important;
    }
    .cat-art {
      width: 10vw !important;
      height: 10vw !important;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .project-grid-items {
      padding: 3vw;
      border-radius: 2vw;
      border-top: 5px solid var(${(props) => props.bg}-alt);
    }

    .details-2 {
      font-size: 4vw !important;
      margin: 0;
      margin-bottom: 3vh;
      font-weight: normal;
    }
    .details-3 {
      .section-title {
        font-size: 3vw !important;
        margin-bottom: 1.5vh;
      }
      .tags-container {
        margin: 0 !important;
        line-height: 110% !important;
        .tag {
          margin-left: 1vw;
          padding: 0.7vw !important;
          cursor: pointer;
          font-size: 3vw !important;
        }
      }
      margin-bottom: 1vh;
    }
    .svg-inline--fa {
      font-size: 4vw !important;
      padding: 0vh !important;
    }
    .cat-title {
      font-size: 3.2vw !important;
    }
    .section-title {
      font-size: 3vw !important;
    }
    .date-value {
      font-size: 3vw !important;
    }
    .cat-art {
      width: 8vw !important;
      height: 8vw !important;
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

const Content = (props) => {
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
  } = props.project;

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
  const background = props.color;

  return (
    <ProjectWrapper bg={background}>
      <Link
        href={`/learn/${props.url}/project/[id]`}
        as={`/learn/${props.url}/project/${urlTitle}-${id}`}
      >
        <div className="project-grid-items">
          {/* <PostLink id={id} title={urlTitle} url={props.url} /> */}
          {/* <a href={projectURL} target=")blank">
          <div className="link">
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </div>
        </a> */}
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
            {/*     <div className="section-title">Top Technologies:</div> */}
            <div className="tags-container">
              {tech.slice(0, 2).map((t) => (
                <Link href={{ query: { tech: t } }} key={t}>
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
};

export default Content;
