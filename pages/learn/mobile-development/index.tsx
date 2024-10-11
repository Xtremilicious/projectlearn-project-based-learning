import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

// Actions
import { getProjects } from "../../../src/redux/actions/dataActions";

const mobileDevelopment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div style={{ backgroundColor: "#0d1117" }}>
      <Head>
        <meta
          name="ProjectLearn"
          content="Learn to Code by Creating Projects"
        />
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
      <Layout
        url={`mobile-development`}
        slug={`mob-dev`}
        title={`Mobile Development`}
        color="--theme-pink"
      />
    </div>
  );
};

export default mobileDevelopment;
