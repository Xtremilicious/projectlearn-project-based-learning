import React from "react";
import styled from "styled-components";
import codeIt from "../img/coding.png"
import challengeYourself from "../img/challenge.png"
import showcase from "../img/rocket.png"

const FeaturesWrapper = styled.div`
  margin: 10vh 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .feature-container{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .feature-title{
    font-size: 4vh;
    margin-bottom: 2vh;
  }
  .feature-description{
    text-align: center;
    font-size: 2.8vh;
  }
  .feature-image{
   width: 8vw;
    margin-bottom: 4vh;
  }
`;

export default function Features() {
  return (
    <FeaturesWrapper>
      <div className="feature-container">
        <div className="feature-art">
          <img src={codeIt} alt="Feature" className="feature-image"/>
        </div>
        <div className="feature-title">Don't just watch, do it</div>
        <div className="feature-description">
          The only way to actually learn something is to practice doing it.
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-art">
          <img src={challengeYourself} alt="Feature" className="feature-image"/>
        </div>
        <div className="feature-title">Challenge yourself</div>
        <div className="feature-description">
          This approach
          creates a need to know essential content and skills.
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-art">
          <img src={showcase} alt="Feature" className="feature-image"/>
        </div>
        <div className="feature-title">Showcase your skills</div>
        <div className="feature-description">
          Give your own personal touch and showcase your projects in your
          resume or portfolio.
        </div>
      </div>
    </FeaturesWrapper>
  );
}
