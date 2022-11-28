import React from "react";
import Link from "next/link";
import styled from "styled-components";
import plSplash from "../../img/pl-splash.svg";

const SplashWrapper = styled.div`
  margin: 0 5vw;
  border-radius: 2vw;
  background: var(--themeDark);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 10.93%,
    rgba(255, 255, 255, 0) 90%
  );
  color: white;
  border-radius: 15px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  .pl-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0 3rem 3rem;
  }
  .title {
    font-size: 8vh;
    margin: 0 0 3vh 0;
  }
  .sub-title {
    font-size: 3vh;
    margin: 0 0vh 5vh 0;
    color: var(--themeTextSecondaryDark);
  }
  .learn-more {
    width: fit-content;
    padding: 1.5vh 2vh;
    font-size: 2.8vh;
    background-color: var(--button-blue);
    color: white;
    border: none;
    border-radius: 1.5vh;
    outline: none;
    cursor: pointer;
  }
  .contribute-btn {
    width: fit-content;
    padding: 1.5vh 2vh;
    font-size: 2.8vh;
    background: rgba(255,255,255,0.05);
    color: white;
    border: none;
    border-radius: 1.5vh;
    outline: none;
    cursor: pointer;
    margin-left: 1.5rem;
  }
  .splash-image-container {
    margin-left: auto;
    padding: 2rem;
    display: flex;
    align-items: center;
  }
  .splash-image {
    width: 40vw;
  }
  .rainbow-text{
    background: linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    .pl-details {
      padding: 2rem;
    }
    .title {
      font-size: 10vw;
      margin: 0 0 3vh 0;
    }
    .sub-title {
      font-size: 5vw;
      margin: 0 0 4vh 0;
    }
    .splash-image-container {
      margin-left: unset;
      padding: 0rem;
      margin-right: 0rem;
      display: flex;
      align-items: center;
    }
    .splash-image {
      width: 100%;
    }
    .learn-more {
      font-size: 4.7vw;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    grid-template-columns: 1fr;
    .pl-details {
      padding: 2rem;
      text-align: center;
      justify-content: center;
    }
    .title {
      font-size: 8vw;
      margin: 0 0 3vh 0;
    }
    .sub-title {
      font-size: 4.5vw;
      margin: 0 0 4vh 0;
    }
    .splash-image-container {
      margin-left: unset;
      padding: 0rem;
      margin-right: 0rem;
      display: flex;
      align-items: center;
    }
    .splash-image {
      width: 100%;
    }
    .learn-more {
      font-size: 4.7vw;
      margin: 0 auto;
    }
  }
`;

export default function Splash() {
  return (
    <SplashWrapper>
      <div className="pl-details">
        <h1 className="title">Learn by Doing</h1>
        <div className="sub-title">
          Tutorials are great, but building projects is the best way to learn.
          Do <span className="rainbow-text">project based learning</span> and learn code the right way!
        </div>
        <div> <Link href="#categories">
          <button className="learn-more">Start Building</button>
        </Link>
        <Link href="#">
          <button className="contribute-btn">Contribute to ProjectLearn</button>
        </Link></div>
       
      </div>
      <div className="splash-image-container">
        <img src={plSplash} alt="Learn by Doing" className="splash-image" />
      </div>
    </SplashWrapper>
  );
}
