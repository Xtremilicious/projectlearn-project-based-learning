import React from "react";
import Link from "next/link";
import styled from "styled-components";
import plSplash from "../../img/pl-splash.png";

const SplashWrapper = styled.div`
  margin: 5vw 5vw;
  background: var(--theme-pink);
  border-radius: 2vw;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  margin-top:7rem;
  .pl-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
  }
  .title {
    font-size: 9.5vh;
    margin: 0 0 3vh 0;
  }
  .sub-title {
    font-size: 3.2vh;
    margin: 0 10vh 4vh 0;
  }
  .learn-more {
    width: fit-content;
    padding: 2vh;
    font-size: 1.7vw;
    background-color: var(--button-blue);
    color: white;
    border: none;
    border-radius: 1.5vh;
    outline: none;
    cursor: pointer;
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
          Do project based learning and learn code the right way!
        </div>
        <Link href="#categories">
          <button className="learn-more">Get Started</button>
        </Link>
      </div>
      <div className="splash-image-container">
        <img src={plSplash} alt="Learn by Doing" className="splash-image" />
      </div>
    </SplashWrapper>
  );
}
