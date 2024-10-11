import Link from "next/link";
// import ReactMarkdown from "react-markdown";

import BlogSplash from "./BlogSplash";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ListWrapper = styled.div`
  background: #fafafa;
  margin-bottom: 5vh;
  .list {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2vw;
    padding: 0;
    grid-row-gap: 3vw;
    .article {
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.04) !important;
      display: flex;
      flex-direction: column;
      background: white;
      .hero_image img {
        width: 100%;
        height: 25vh;
        object-fit: cover;
      }
      .blog__info {
        padding: 4vh 2vw;
        display: flex;
        flex-direction: column;
        height: 100%;
        h2 {
          margin-top: 0;
          font-size: 3vh;
          margin-bottom: 7vh;
        }
        h3 {
          font-weight: normal;
          margin: 0;
          font-size: 2.6vh;
        }
        .date {
          font-weight: 300;
        }
        .meta {
          margin-top: auto;
        }
      }
    }
    .create {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.5;
      transition: 0.5s;
      :hover {
        opacity: 1;
      }
      .outer-circle {
        background: #fafafa;
        padding: 3vw;
        border-radius: 50%;
        color: black;
        font-size: 1.5vw;
      }
      .create-post {
        font-weight: normal;
      }
    }
  }
  .article-meta {
    display: flex;
    align-items: center;
  }
  .author-image {
    display: flex;
    align-items: center;
    margin-right: 1vh;
  }
  .author-image img {
    height: 3vw;
    width: 3vw;
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
    padding-bottom: 7vw;
    .list {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 7vw;
      margin-top: 7vw;
      .article {
        min-height: 40vh;
      }
      .outer-circle {
        padding: 10vw !important;
        font-size: 5vw !important;
      }
      .create {
        opacity: 1 !important;
      }
      .blog__info {
        padding: 4vh 6vw !important;
        h2 {
          font-size: 3.3vh !important;
        }
      }
    }
    .author-image img {
      height: 11vw;
      width: 11vw;
    }
    .article-meta {
      margin-top: 2vh;
      margin-left: 0vh;
    }
  }
`;

const BlogList = (props) => {
  function truncateSummary(content) {
    return content.slice(0, 140).trimEnd() + "...";
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  const posts = props.allBlogs;
  return (
    <ListWrapper>
      <BlogSplash />
      <ul className="list">
        {posts.map((post) => (
          <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
            <a>
              <li className="article">
                <div className="hero_image">
                  <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
                </div>
                <div className="blog__info">
                  <h2>{post.document.data.title}</h2>
                  <div className="article-meta">
                    <div className="author-image">
                      <img src={post.document.data.author_image} />
                    </div>
                    <div className="meta-info">
                      <h3 className="author">{post.document.data.author}</h3>
                      <h3 className="date">{reformatDate(post.document.data.date)}</h3>
                    </div>
                  </div>
                </div>
              </li>
            </a>
          </Link>
        ))}

        {/* Github create new file pre-fill:
          filename: the file name
          value: the file content
          message: commit title
          description: commit description */}

        <a
          href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/new/master?filename=/posts/my_new_post.md&message=My+New+Post%21&description=I+just+finished+writing+a+new+post%21&value=---%0D%0Atitle%3A+A+trip+to+Iceland++++++++++++++<%21--+Your+Post+Title+-->%0D%0Aauthor%3A+%27Watson+%26+Crick+%27+++++++++++++<%21--+Your+Name+-->%0D%0Adate%3A+%272019-07-10T16%3A04%3A44.000Z%27++++++<%21--+Publish+Date.+Format%3A+YYYY-MM-DD+-->%0D%0Ahero_image%3A+%2Fstatic%2Fexample.jpg+++++++<%21--Main+image%2C+store+in+%2Fstatic+folder.+-->%0D%0A---"
          target="_blank"
        >
          <li className="article create">
            <div className="outer-circle">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <h3 className="create-post">Create Post</h3>
          </li>
        </a>
      </ul>
    </ListWrapper>
  );
};

export default BlogList;
