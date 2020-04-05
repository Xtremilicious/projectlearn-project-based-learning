import matter from "gray-matter";
import BlogList from "../../src/components/Blog/BlogList";
import Navbar from "../../src/components/Landing/Navbar";
import Head from "next/head";

import styled from "styled-components";

const BlogWrapper = styled.div`
  min-height: 100vh;
  background: #fafafa;
  padding-bottom: 3vw;
`;

const Index = (props) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
        <meta
          name="description"
          content={`Read awesome articles about all things tech. Discover tech facts, opportunites, project tutorials, guides and much more. It also allows you to contribute and publish posts on anything related to tech.`}
        />

        <meta
          name="keywords"
          content={`project, tutorial, learn code by doing, project based learning, learn code free, web development
      `}
        />

        <title>ProjectLearn Blog - All Things Tech</title>
        {/* <!--Title--> */}
      </Head>
      <BlogWrapper>
        <Navbar />
        <BlogList allBlogs={props.allBlogs} />
      </BlogWrapper>
    </React.Fragment>
  );
};

export default Index;

Index.getInitialProps = async function () {
  // get all blog data for list
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug,
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  return {
    allBlogs: posts,
  };
};
