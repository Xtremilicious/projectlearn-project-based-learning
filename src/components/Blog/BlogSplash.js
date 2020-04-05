import React from "react";

import styled from "styled-components";

const SplashWrapper = styled.div`
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 17.5vw;
  }
  .title {
    font-size: 12vh;
    text-align: center;
    line-height: 110%;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .title {
    font-size: 10vw;
    line-height: 110%;
  }
  .title-container {
    padding: 1% 1vw;
  }
  }
`;

export default function BlogSplash() {
  return (
    <SplashWrapper>
      <div className="title-container">
        <h1 className="title">Today a reader, tomorrow a leader.</h1>
      </div>
    </SplashWrapper>
  );
}
