import React, { Component } from "react";
import styled from "styled-components";
import Project from "./Project";
import { useRouter, withRouter } from "next/router";

const ListWrapper = styled.div`
  .projects-grid {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 20vh;
    display: grid;
    padding-bottom: 4vh;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2vw;
    grid-row-gap: 4vh;
    margin-bottom: 5vh;
    @media only screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-row-gap: 6vh;
      margin-left: 11.5%;
      margin-right: 11.5%;
      grid-column-gap: 2vh;
      margin-top: 28.5vh;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 8vw;
      margin-left: 2.5%;
      margin-right: 2.5%;
      grid-column-gap: 4vw;
      margin-top: 28.5vh;
    }
  }
`;

const ProjectList = (props) => {
  const { projects } = props;
  const {
    query: { tech },
  } = useRouter();
  return (
    <ListWrapper>
      <div className="projects">
        <div className="projects-grid">
          {projects != null
            ? tech !== undefined
              ? projects
                  .filter((project) => project.tech.includes(tech))
                  .map((project) => (
                    <Project
                      key={project.id}
                      project={project}
                      url={props.url}
                      color={props.color}
                    />
                  ))
              : projects.map((project) => (
                  <Project
                    key={project.id}
                    project={project}
                    url={props.url}
                    color={props.color}
                  />
                ))
            : null}
        </div>
      </div>
    </ListWrapper>
  );
};

export default ProjectList;
