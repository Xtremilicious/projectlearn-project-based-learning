// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";

// //Redux Stuff
// import { connect } from "react-redux";
// import { getProjects } from "../../../../src/redux/actions/dataActions";

// // import ProjectInfo from "../../../../src/components/Dashboards/webDashboard/Info/ProjectInfo";

// const Project = props => {
//   const { projects } = props;

//   const router = useRouter();

//   let projectTitle, projectID;

//   let array = router.query.id.split("-");

//   projectTitle = array.slice(0, array.length - 1).map(item => item);
//   projectID = array[array.length - 1];

//   let project;

//   project = projects.filter(
//     project =>
//       project.title
//         .toLowerCase()
//         .split(/\s/)
//         .join("")
//         .split("-")
//         .join("") == projectTitle.join("") && project.id == parseInt(projectID)
//   )[0];

//   return project != null ? (
//     <div>
//       <Head>
//         <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
//         <meta
//           name="description"
//           content="Learn how to create web applications using HTML, CSS, JavaScript, React and more using the project based learning approach."
//         />

//         <meta
//           name="keywords"
//           content={`project, tutorial, learn code by doing, project based learning, learn code free, web development, ${project.tech.join(
//             ","
//           )}`}
//         />

//         <title>{`Build a ${project.title} | ProjectLearn`}</title>
//         {/* <!--Title--> */}
//       </Head>
//       <ProjectInfo project={project} />
//     </div>
//   ) : (
//     "Project Not Found"
//   );
// };

// Project.getInitialProps = async ({ store }) => {
//   store.dispatch(getProjects());
// };

// const mapStateToProps = state => {
//   return {
//     projects: state.data.projects
//   };
// };

// export default connect(mapStateToProps, {})(Project);
