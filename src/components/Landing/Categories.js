import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import mobDev from "../../img/mob-dev-cat.png";
import webDev from "../../img/prog-lang-cat.png";
import ml from "../../img/ml-cat-alt.png";
import gameDev from "../../img/game-dev-cat.png";

const CategoriesWrapper = styled.div`
  margin: 10vh 5vw;
  display: grid;
  grid-template-columns: 9.5vw auto; 
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
    font-size: 4vh;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1vw;
    margin: 0;
    text-align: center;
    color: white;
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
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-content: center;
    position: relative;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(135deg,rgba(255,255,255,0.05) 10.93%,rgba(255,255,255,0) 90%);
    padding: 1.3vh 1vh 1.3vh;
    color: white;
    border-radius: 15px;
    position: relative;
    background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 90%);
  }

  .bounding-box{
    width: 25px;
    height: 25px;
    position: absolute;    
    top: -15px;
    left: -15px;
    border: 1px solid #40a0ff;
    background-color: var(--themeDark);
    z-index: 2;
    opacity: 1;
  }

  .section-category:hover {
    .cat-redirect {
      transform: translateX(-0.7vh);
    }
  }
  .category-art {
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
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
  }
  .cat-title {
    font-size: 3vh;
    margin: 0;
    font-family: "Lato";
    margin-bottom: 2vh;
  }
  .cat-subtitle {
    font-size: 2.5vh;
    padding-right: 0.7vw;
    color: var(--themeTextSecondaryDark);
  }
  .cat-redirect {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 1.5vh;
    right: 2vh;
    font-size: 1.4vw;
    cursor: pointer;
    transition: 0.3s;
  }
  .cat-redirect-text {
    font-size: 2.8vh;
    margin-right: 1vh;
  }
  .rainbow-text{
    background: linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    margin: 5vh 5vw;
    grid-template-columns: 1fr;
    .section-content {
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }
    .section-category {
      padding: 2vw;
      grid-template-columns: 0.8fr 2fr !important;
      align-items: center;
    }
    .section-title-container {
      display: none;
    }
    .cat-title {
      font-size: 5.3vw;
      margin-bottom: 1vh;
    }
    .cat-subtitle {
      font-size: 3.8vw;
    }
    .cat-img {
      height: 20vw;
    }
    .category-art {
      width: 25vw;
      display: flex;
    }
    .cat-redirect {
      font-size: 4vw;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    margin: 5vh 5vw;
    grid-template-columns: 1fr;
    .section-content {
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
    }
    .section-category {
      padding: 2vw;
      grid-template-columns: 0.8fr 2fr !important;
      align-items: center;
    }
    .section-title-container {
      display: none;
    }
    .cat-title {
      font-size: 5vw;
      margin-bottom: 1vh;
    }
    .cat-subtitle {
      font-size: 3.8vw;
    }
    .cat-img {
      height: 20vw;
    }
    .category-art {
      width: 25vw;
      display: flex;
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
           // style={{ backgroundColor: "var(--theme-green)" }}
          >
            <div className="category-art">
              <img src={webDev} alt="Web Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Web Development</h2>
              <div className="cat-subtitle">
                Learn how to create web applications using HTML, CSS,
                JavaScript, React and more.
              </div>
            </div>

            <div className="cat-redirect">
              {/* <span class="cat-redirect-text">Explore</span> */}
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/mobile-development">
          <div
            className="section-category"
            /* style={{
              backgroundColor: "var(--theme-pink)",
              backgroundImage:
                "repeating-linear-gradient(45deg,#f9d9eb,#f9d9eb 50px,#f7cfe2 0,#f7cfe2 100px)",
            }} */
            //style={{ backgroundColor: "var(--theme-pink)" }}
          >
            <div className="category-art">
              <img src={mobDev} alt="Mobile Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Mobile Development</h2>
              <div className="cat-subtitle">
                Learn how to create mobile applications using Android, Flutter,
                React Native and more.
              </div>
            </div>

            <div className="cat-redirect">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/game-development">
          <div
            className="section-category"
            // style={{ backgroundColor: "var(--theme-yellow)", backgroundImage: "repeating-linear-gradient(45deg,#f6e049,#f6e049 50px,#eddc47 0,#eddc47 100px)" }}
            //style={{ backgroundColor: "var(--theme-yellow)" }}
          >
            <div className="category-art">
              <img src={gameDev} alt="Game Development" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Game Development</h2>
              <div className="cat-subtitle">
                Learn how to build awesome video games. C#, PyGame, OpenGL,
                Unity and more.
              </div>
            </div>

            <div className="cat-redirect">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </div>
        </Link>
        <Link href="/learn/machine-learning-and-ai">
          <div
            className="section-category"
            // style={{ backgroundColor: "var(--theme-blue)", backgroundImage: "repeating-linear-gradient(45deg,#aac6fc,#aac6fc 50px,#a8bcff 0,#a8bcff 100px)" }}
            //style={{ backgroundColor: "var(--theme-blue)" }}
          >
            <div className="category-art">
              <img src={ml} alt="Machine Learning" className="cat-img" />
            </div>
            <div className="category-details">
              <h2 className="cat-title">Machine Learning</h2>
              <div className="cat-subtitle">
                Learn how a machine learns. Python, NumPy, Pandas, SciKit,
                Tensorflow and more.
              </div>
            </div>
            <div className="cat-redirect">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
          </div>
        </Link>
      </div>
    </CategoriesWrapper>
  );
}
