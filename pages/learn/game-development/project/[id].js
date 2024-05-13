import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, connect } from "react-redux";

// Components
import Head from "next/head";
import ProjectInfo from "../../../../src/components/Dashboard/Info/ProjectInfo";

// Actions
import { getProjects } from "../../../../src/redux/actions/dataActions";

const Project = (props) => {
  const { projects } = props;

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  let projectTitle, projectID;

  const array = router.query?.id?.split("-");

  if (!array) {
    return;
  }

  projectTitle = array.slice(0, array.length - 1).map((item) => item);
  projectID = array[array.length - 1];

  let project;

  project = projects.filter(
    (project) =>
      project.title.toLowerCase().split(/\s/).join("").split("-").join("") ==
        projectTitle.join("") && project.id == parseInt(projectID)
  )[0];

  const projectCategory = "Game Development";
  const slug = "game-development";

  let article;
  let flag = 0;
  if (
    project.title.toLowerCase()[0] === "a" ||
    project.title.toLowerCase()[0] === "e" ||
    project.title.toLowerCase()[0] === "i" ||
    project.title.toLowerCase()[0] === "o" ||
    project.title.toLowerCase()[0] === "u"
  ) {
    flag = 1;
  }

  article = flag === 1 ? "an" : "a";

  return project != null ? (
    <div>
      <Head>
        <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
        <meta
          name="description"
          content={`Learn how to build ${article} ${
            project.title
          } using ${project.tech.join(
            ", "
          )} and more through project-based learning approach.`}
        />

        <meta
          name="keywords"
          content={`project, tutorial, learn code by doing, project based learning, learn code free, web development, ${project.tech.join(
            ", "
          )}`}
        />

        <title>{`Build ${article} ${project.title} - ${projectCategory} Project | ProjectLearn`}</title>
        {/* <!--Title--> */}
      </Head>
      <ProjectInfo
        project={project}
        projectCategory={projectCategory}
        slug={slug}
      />
    </div>
  ) : (
    "Project Not Found"
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.data.projects,
  };
};

export default connect(mapStateToProps, {})(Project);
