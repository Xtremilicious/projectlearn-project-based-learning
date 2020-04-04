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
