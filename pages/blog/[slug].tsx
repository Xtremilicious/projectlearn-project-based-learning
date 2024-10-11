import React, { useEffect } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../src/components/Blog/Footer";

const ArticleWrapper = styled.div`
  margin-bottom: 1vh;
  img {
    max-width: 100%;
  }
  h2 {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 0.5rem;
    width: 100%;
  }
  .back {
    position: absolute;
    background: #2e2e2e;
    border-radius: 50%;
    padding: 2vh;
    top: 2vw;
    width: fit-content;
    border-radius: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 2vw;
    color: white;
    font-size: 2vw;
    cursor: pointer;
    transition: 0.5s;
    .back-text {
      margin-left: 1vh;
    }
    :hover {
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    }
  }
  .author,
  .date {
    font-weight: normal;
    font-size: 1.5vw;
    margin: 0;
  }
  .date {
    font-weight: 200;
  }
  .blog h1 {
    margin: 0.7rem;
    font-size: 3.5vw;
  }
  .blog__hero {
    height: 60vh;
    margin: 0;
    overflow: hidden;
  }
  .blog__hero img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .blog__info {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    margin: 0 10%;
  }
  .blog__info h1 {
    margin-bottom: 0.66rem;
  }
  .blog__info h3 {
    margin-bottom: 0;
  }
  .blog__body {
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.35vw;
    padding-bottom: 2vw;
  }
  .blog__body a {
    padding-bottom: 1.5rem;
    color: var(--button-blue);
  }
  .blog__body:last-child {
    margin-bottom: 0;
  }
  .blog__body h1 h2 h3 h4 h5 h6 p {
    font-weight: normal;
  }
  .blog__body p {
    color: inherit;
  }
  .blog__body ul {
    list-style: initial;
  }
  .blog__body ul ol {
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    padding-left: 1.45rem;
  }
  .article-meta {
    display: flex;
    align-items: center;
    margin-left: 3vh;
  }
  .author-image {
    display: flex;

    align-items: center;
    margin-right: 1vh;
  }
  .author-image img {
    height: 3.7vw;
    width: 3.7vw;
    border-radius: 50%;
    overflow: hidden;
    object-position: center;
    object-fit: cover;
  }
  .meta-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 3vh;
    .blog__hero {
      height: 30vh;
    }
    .blog__info {
      margin: 0 5%;
    }
    .blog__info h1 {
      font-size: 7vw;
      text-align: center;
    }
    .blog__info h3 {
      margin-bottom: 0;
      font-size: 4vw;
    }
    .blog__body {
      font-size: 4vw;
    }
    .back {
      font-size: 3.5vw;
      padding: 1.5vh;
    }
    .author-image img {
      height: 9vw;
      width: 9vw;
    }
    .article-meta {
      margin-top: 2vh;
      justify-content: center;
      margin-left: 0vh;
    }
  }
`;

export default function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }
  const { post } = props;

  useEffect(() => {
    var links = document.getElementsByTagName("a");
    var len = links.length;

    for (var i = 0; i < len; i++) {
      links[i].target = "_blank";
    }
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="ProjectLearn" content="Learn Code By Doing Projects" />
        <title>{`${post.frontmatter.title} | ProjectLearn`}</title>
        {/* <!--Title--> */}
      </Head>
      <ArticleWrapper>
        <Link href="/blog">
          <div className="back">
            <FontAwesomeIcon icon={faArrowLeft} /> <div className="back-text">Back To Home</div>
          </div>
        </Link>

        <article className="blog">
          <figure className="blog__hero">
            <img src={post.frontmatter.hero_image} alt={`blog_hero_${post.frontmatter.title}`} />
          </figure>
          <div className="blog__info">
            <h1>{post.frontmatter.title}</h1>
            <div className="article-meta">
              <div className="author-image">
                <img src={post.frontmatter.author_image} />
              </div>
              <div className="meta-info">
                <h3 className="author">{post.frontmatter.author}</h3>
                <h3 className="date">{reformatDate(post.frontmatter.date)}</h3>
              </div>
            </div>
          </div>
          <div className="blog__body">
            <ReactMarkdown source={post.markdownBody} />
          </div>
        </article>
      </ArticleWrapper>
      <Footer />
    </React.Fragment>
  );
}

BlogTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query;
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    post: {
      fileRelativePath: `src/posts/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};
