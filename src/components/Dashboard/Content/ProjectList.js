import React, { Component } from "react";
import styled from "styled-components";
import Project from "./Project";
import { useRouter, withRouter } from "next/router";

const ListWrapper = styled.div`
  .projects-grid {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: -10vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2vw;
    grid-row-gap: 4vh;
    margin-bottom: 5vh;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-row-gap: 4vh;
      margin-left: 10%;
      margin-right: 10%;
      grid-column-gap: 2vh;
      margin-top: -7vh;
  }
  }
`;

const ProjectList = props => {
  const { projects } = props;
  const {
    query: { tech }
  } = useRouter();
  return (
    <ListWrapper>
      <div className="projects">
        <div className="projects-grid">
          {projects != null
            ? tech !== undefined
              ? projects
                  .filter(project => project.tech.includes(tech))
                  .map(project => (
                    <Project key={project.id} project={project} />
                  ))
              : projects.map(project => (
                  <Project key={project.id} project={project} />
                ))
            : null}
        </div>
      </div>
    </ListWrapper>
  );
};

export default ProjectList;
