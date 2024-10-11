import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

// Actions
import { getProjects } from "../../../src/redux/actions/dataActions";

const machineLearningAI = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div>
      <Head>
        <meta
          name="ProjectLearn"
          content="Learn to Code by Creating Projects"
        />
        <meta
          name="description"
          content="Learn about machine learning and artificial intelligence using Python, NumPy, Pandas, SciKit, Tensorflow and more using the project based learning approach."
        />
        <meta
          name="keywords"
          content="project, tutorial, learn code by doing, project based learning, learn code free, machine learning, artificial intelligence, ai, ml, deep learning"
        />
        {/* <!--Title--> */}
        <title>Learn Machine Learning and AI | ProjectLearn</title>
      </Head>
      <Layout
        url={`machine-learning-and-ai`}
        slug={`ml-ai`}
        title={`Machine Learning & AI`}
        color="--theme-blue"
      />
    </div>
  );
};

export default machineLearningAI;
