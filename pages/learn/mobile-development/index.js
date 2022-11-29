import React, { Component } from "react";
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

//Redux Stuff
import { connect } from "react-redux";
import { getProjects } from "../../../src/redux/actions/dataActions";

class mobileDevelopment extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(getProjects());
  }
  render() {
    return (
      <div style={{backgroundColor: "#0d1117"}}>
        <Head>
          <meta name="ProjectLearn" content="Learn to Code by Creating Projects" />
          <meta
            name="description"
            content="Learn how to create mobile applications using Java, Kotlin, Swift, React Native and more using the project based learning approach."
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, mobile development, android, ios"
          />
          {/* <!--Title--> */}
          <title>Learn Mobile Development | ProjectLearn</title>
        </Head>
        <Layout url={`mobile-development`} slug={`mob-dev`} title={`Mobile Development`} color='--theme-pink'/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};

export default connect(mapStateToProps, {})(mobileDevelopment);
