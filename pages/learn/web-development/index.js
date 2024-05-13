import React, { Component } from "react";
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

//Redux Stuff
import { connect } from "react-redux";
import { getProjects } from "../../../src/redux/actions/dataActions";

class webDevelopment extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(getProjects());
  }
  render() {
    return (
      <div style={{background: "black"}}>
        <Head>
          <meta name="ProjectLearn" content="Learn to Code by Creating Projects" />
          <meta
            name="description"
            content="Learn how to create web applications using HTML, CSS, JavaScript, React and more using the project based learning approach."
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, web development, javascript, react"
          />
          {/* <!--Title--> */}
          <title>Learn Web Development | ProjectLearn</title>
        </Head>
        <Layout url={`web-development`} slug={`web-dev`} title={`Web Development`} color='--theme-green'/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};

export default connect(mapStateToProps, {})(webDevelopment);
