import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mobDev from "../../img/mob-dev-cat.png";
import webDev from "../../img/prog-lang-cat.png";
import ml from "../../img/ml-cat-alt.png";
import gameDev from "../../img/game-dev-cat.png";

const CategoriesWrapper = styled.div`
  margin: 10vh 5vw;
  display: grid;
  grid-template-columns: 9vw 79vw;
  grid-template-rows: 1fr;
  height: fit-content;
  .section-title-container {
    position: relative;
    display: flex;
  }
  .section-title {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    padding: 15vh 3vh;
    font-size: 5vh;
    background: var(--theme-pink);
    border-radius: 1vw;
    margin: 0;
    text-align: center;
    /* background-image: repeating-linear-gradient(45deg,#f9d9eb,#f9d9eb 50px,#f7cfe2 0,#f7cfe2 100px); */
  }
  .section-content {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }
  .section-category {
    border-radius: 1vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-content: center;
    position: relative;
    padding-right: 0.6rem;
  }
  .category-art {
    margin: 1.5rem;
    border: 4px solid white;
    border-radius: 1vh;
    width: 14vw;
    display: flex;
    height: fit-content;
    justify-content: center;
  }
  .cat-img {
    height: 10vw;
  }
  .category-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cat-title {
    font-size: 2vw;
    margin: 0;
    font-weight: normal;
    margin-bottom: 2vh;
  }
  .cat-subtitle {
    font-size: 1.2vw;
    padding-right: 0.7vw;
  }
  .cat-redirect {
    position: absolute;
    bottom: 1.5vh;
    right: 2vh;
    font-size: 4vh;
    cursor: pointer;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 5vh 5vw;
    grid-template-columns: 1fr;
    .section-content {
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }

    .section-title-container {
      display: none;
    }
    .cat-title {
      font-size: 5vw;
      margin-bottom: 1vh;
    }
    .cat-subtitle {
      font-size: 2.75vw;
    }
    .cat-img {
      height: 15vw;
    }
    .category-art {
      width: 20vw;
    }
    .cat-redirect {
      font-size: 4vw;
    }
  }
`;

export default function Categories() {
  return (
    <CategoriesWrapper id="categories">
      <div className="section-title-container">
        <h1 className="section-title">Categories</h1>
      </div>
      <div className="section-content">
        <Link href="/learn/web-development">
          <div
            className="section-category"
            // style={{ backgroundColor: "var(--dashboard-purple-alt)", backgroundImage: "repeating-linear-gradient(45deg,#7fd6c2,#7fd6c2 50px,#86d9ce 0,#86d9ce 100px)" }}
            style={{ backgroundColor: "var(--theme-green)" }}
          >
            <div className="category-art">
              <img src={webDev} alt="Web Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Web Development</h2>
              <div className="cat-subtitle">
                Learn how to create web applications using HTML, CSS, JavaScript, React and more.
              </div>
            </div>

            <div className="cat-redirect">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/mobile-development">
          <div
            className="section-category"
            style={{
              backgroundColor: "var(--theme-pink)",
              backgroundImage:
                "repeating-linear-gradient(45deg,#f9d9eb,#f9d9eb 50px,#f7cfe2 0,#f7cfe2 100px)"
            }}
            style={{ backgroundColor: "var(--theme-pink)" }}
          >
            <div className="category-art">
              <img src={mobDev} alt="Mobile Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Mobile Development</h2>
              <div className="cat-subtitle">
                Learn how to create mobile applications using Android, Flutter, React Native and
                more.
              </div>
            </div>

            <div className="cat-redirect">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/game-development">
          <div
            className="section-category"
            // style={{ backgroundColor: "var(--theme-yellow)", backgroundImage: "repeating-linear-gradient(45deg,#f6e049,#f6e049 50px,#eddc47 0,#eddc47 100px)" }}
            style={{ backgroundColor: "var(--theme-yellow)" }}
          >
            <div className="category-art">
              <img src={gameDev} alt="Game Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Game Development</h2>
              <div className="cat-subtitle">
                Learn how to build awesome video games. C#, PyGame, OpenGL, Unity and more.
              </div>
            </div>

            <div className="cat-redirect">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/machine-learning-and-ai">
          <div
            className="section-category"
            // style={{ backgroundColor: "var(--theme-blue)", backgroundImage: "repeating-linear-gradient(45deg,#aac6fc,#aac6fc 50px,#a8bcff 0,#a8bcff 100px)" }}
            style={{ backgroundColor: "var(--theme-blue)" }}
          >
            <div className="category-art">
              <img src={ml} alt="Machine Learning" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">ML & Artificial Intelligence</h2>
              <div className="cat-subtitle">
                Learn how a machine learns. Python, NumPy, Pandas, SciKit, Tensorflow and more.
              </div>
            </div>
            <div className="cat-redirect">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </Link>
      </div>
    </CategoriesWrapper>
  );
}
