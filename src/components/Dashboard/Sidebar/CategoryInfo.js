import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InfoWrapper = styled.div`
  width: 25vw;
  .cat-info {
    background: var(${(props) => props.bg});
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(${(props) => props.color});
  }
  .selected-cat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    color: white;
    .svg-inline--fa {
      font-size: 7vh;
      padding: 1vh;
    }
    .cat-art {
      background: var(${(props) => props.bg}-alt);
      border-radius: 2vh;
      height: 9vh;
      width: 9vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cat-title {
      margin-top: 1vh;
      font-size: 3.3vh;
      background: var(${(props) => props.bg}-alt);
      padding: 1vh;
      border-radius: 1vh;
    }
  }
  .selected-cat-stats {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    text-align: center;
    .stat {
      .stat-title {
        font-size: 2.7vh;
      }
      .stat-sub-title {
        font-size: 2.3vh;
        font-weight: 100;
      }
    }
  }
  .back-to-landing {
    position: absolute;
    top: 1.5vh;
    left: 2vh;
    font-size: 4vh;
    cursor: pointer;
  }
`;

const CategoryInfo = (props) => {
  const {
    query: { tech },
  } = useRouter();

  let { projects } = props;

  let totalCount = 0,
    articleCount = 0,
    videoCount = 0;

  const categorySlug = props.slug;

  if (projects != null) {
    projects = projects
      .filter((project) => project.category.includes(categorySlug))
      .map((item) => item);
    if (tech != undefined) {
      const filteredProjects = projects
        .filter((projects) => projects.tech.includes(tech))
        .map((item) => item);
      totalCount = filteredProjects.length;
      articleCount = filteredProjects.filter((project) => project.type === "article").length;
      videoCount = totalCount - articleCount;
    } else {
      totalCount = projects.length;
      articleCount = projects.filter((project) => project.type === "article").length;
      videoCount = totalCount - articleCount;
    }
  }

  return (
    <InfoWrapper bg={props.color}>
      <div className="cat-info">
        <Link href="../../#categories">
          <div className="back-to-landing">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        <div className="selected-cat">
          <div className="cat-title">{tech || "Showing All"}</div>
        </div>
        <div className="selected-cat-stats">
          <div className="stat">
            <div className="stat-title">Total</div>
            <div className="stat-sub-title">{totalCount}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Videos</div>
            <div className="stat-sub-title">{videoCount}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Articles</div>
            <div className="stat-sub-title">{articleCount}</div>
          </div>
        </div>
      </div>
    </InfoWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.data.projects,
  };
};

export default connect(mapStateToProps, {})(CategoryInfo);
