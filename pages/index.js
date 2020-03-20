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
          <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
          <meta
            name="description"
            content="Tutorials are great, but building projects is the best way to learn. Do project based learning and learn code the right way!"
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free"
          />
          {/* <!--Title--> */}
          <title>ProjectLearn - Learn Code By Doing Projects</title>
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