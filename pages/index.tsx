import React, { Component } from "react";
import Head from "next/head";
import Navbar from "@/components/landing/Navbar";
import Splash from "@/components/landing/Splash";
import Categories from "@/components/landing/Categories";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
import styled from "styled-components";


const IndexWrapper = styled.div`
  background-color: var(--themeDark);
`



export default class Landing extends Component {
  render() {
    return (
      <IndexWrapper>
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
          <Newsletter />
          <Footer />
        </div>
      </IndexWrapper>
    );
  }
}
