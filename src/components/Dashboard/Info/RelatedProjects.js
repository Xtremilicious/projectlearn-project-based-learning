import React from "react";
import styled from "styled-components";
import Project from "./RelatedProject";

const ListWrapper = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  .projects-grid {
    margin-left: 3vw;
    margin-right: 3vw;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;

    height: 85vh;
  }
  .section-title {
    height: 12vh;
    display: flex;
    align-items: center;
    font-size: 4.5vh;
    padding-left: 3vw;
  }
`;

const ProjectList = props => {
  const { projects } = props;
  return (
    <ListWrapper>
      <div className="section-title">More Projects</div>

      <div className="projects-grid">
        {projects != null
          ? projects.map(project => (
              <Project key={project.id} project={project} slug={props.slug} />
            ))
          : null}
      </div>
    </ListWrapper>
  );
};

export default ProjectList;
