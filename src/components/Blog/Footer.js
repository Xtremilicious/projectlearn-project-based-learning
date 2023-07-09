import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin: 0 !important;
  padding: 3vh calc(5vw + 3vh);
  display: flex;
  padding: 3vh;
  font-size: 1.3vw;
  background: #2e2e2e;
  color: white;
  .footer-container {
    margin-left: auto;
    display: flex;
  }
  .footer-content {
    margin-right: 2rem;
    color: white;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0vh 1vw;
    font-size: 4vw;
    .mobile {
      display: none;
    }
    .footer-content {
      margin-right: 0rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div>© 2023 ProjectLearn</div>
      <div className="footer-container">
        <a
          href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/blob/master/README.md"
          className="footer-content"
          target="_blank"
        >
          About
        </a>
        <a
          href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning/blob/master/CONTRIBUTE.md"
          className="footer-content mobile"
          target="_blank"
        >
          Contribution Guidelines
        </a>
      </div>
    </FooterWrapper>
  );
}
