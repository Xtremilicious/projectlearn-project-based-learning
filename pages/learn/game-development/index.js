import React, { Component } from "react";
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

//Redux Stuff
import { connect } from "react-redux";
import { getProjects } from "../../../src/redux/actions/dataActions";

class gameDevelopment extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(getProjects());
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="ProjectLearn" content="Learn to Code by Creating Projects" />
          <meta
            name="description" content="Learn how to create video games using C#, Python, JavaScript, OpenGL, Unity and more using the project based learning approach."
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, game development"
          />
          {/* <!--Title--> */}
          <title>Learn Game Development | ProjectLearn</title>
        </Head>
        <Layout url={`game-development`} slug={`game-dev`} title={`Game Development`} color='--theme-yellow'/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};

export default connect(mapStateToProps, {})(gameDevelopment);