import React, { Component } from "react";
import Head from "next/head";
import Layout from "../../../src/components/Dashboards/mlAIDashboard/Layout";

//Redux Stuff
import { connect } from "react-redux";
import { getProjects } from "../../../src/redux/actions/dataActions";

class machineLearningAI extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(getProjects());
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
          <meta
            name="description" content="Learn how a machine learns. Python, NumPy, Pandas, SciKit, Tensorflow and more."
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, machine learning, artificial intelligence, ai, ml, deep learning"
          />
          {/* <!--Title--> */}
          <title>Learn Machine Learning and AI | ProjectLearn</title>
        </Head>
        <Layout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.projects
  };
};

export default connect(mapStateToProps, {})(machineLearningAI);
