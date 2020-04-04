import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  img {
    max-width: 100%;
  }
  .author,
  .date {
    font-weight: normal;
    font-size: 1.5vw;
    margin: 0;
  }
  .blog h1 {
    margin: 0.7rem;
    font-size: 4vw;
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
    align-items: center;
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
    align-items: center;
    font-size: 1.35vw;
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
  return (
    <ArticleWrapper>
      <article className="blog">
        <figure className="blog__hero">
          <img src={post.frontmatter.hero_image} alt={`blog_hero_${post.frontmatter.title}`} />
        </figure>
        <div className="blog__info">
          <h1>{post.frontmatter.title}</h1>
          <h2 className="author">{post.frontmatter.author}</h2>
          <h3 className="date">{reformatDate(post.frontmatter.date)}</h3>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={post.markdownBody} />
        </div>
      </article>
    </ArticleWrapper>
  );
}

BlogTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    post: {
      fileRelativePath: `src/posts/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
  };
};
