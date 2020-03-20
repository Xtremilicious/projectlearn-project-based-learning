import React, { Component } from "react";
import Head from "next/head";
import Layout from "../../../src/components/Dashboards/gameDashboard/Layout";

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
          <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
          <meta
            name="description" content="Learn how to build awesome video games. C#, PyGame, OpenGL, Unity and more."
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, game development"
          />
          {/* <!--Title--> */}
          <title>Learn Game Development | ProjectLearn</title>
        </Head>
        <Layout/>
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