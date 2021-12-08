import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../src/components/Landing/Navbar";
import Splash from "../src/components/Landing/Splash";
import Categories from "../src/components/Landing/Categories";
import Footer from "../src/components/Landing/Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="ProjectLearn" content="Learn to Code by Creating Projects" />
          <meta
            name="description"
            content="A project-based learning approach in web development, mobile development, game development, machine learning and artificial intelligence. Learn code the right way!"
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, web development, app development, game development, machine learning, artificial intelligence"
          />
          {/* <!--Title--> */}
          <title>ProjectLearn - Learn to Code by Creating Projects</title>
        </Head>
        <div>
          <Navbar />
          <Splash />
          <Categories />
          <Footer />
        </div>
      </div>
    );
  }
}
