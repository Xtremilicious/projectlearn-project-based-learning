import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

// Components
import Head from "next/head";
import Layout from "../../../src/components/Dashboard/Layout";

// Actions
import { getProjects } from "../../../src/redux/actions/dataActions";

const gameDevelopment = () => {
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
          content="Learn how to create video games using C#, Python, JavaScript, OpenGL, Unity and more using the project based learning approach."
        />
        <meta
          name="keywords"
          content="project, tutorial, learn code by doing, project based learning, learn code free, game development"
        />
        {/* <!--Title--> */}
        <title>Learn Game Development | ProjectLearn</title>
      </Head>
      <Layout
        url={`game-development`}
        slug={`game-dev`}
        title={`Game Development`}
        color="--theme-yellow"
      />
    </div>
  );
};

export default gameDevelopment;
