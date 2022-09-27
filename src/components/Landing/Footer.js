import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin: 0vh 5vw;
  display: flex;
  padding: 3vh;
  font-size: 1.3vw;
  color: var(--theme-grey);
  .footer-container {
    margin-left: auto;
    display: flex;
  }
  .footer-content {
    margin-right: 2rem;
    color: var(--button-blue);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0vh 1vw;
    font-size: 4vw;
    .mobile {
      display: none;
    }
    .footer-content {
      margin-right: 0rem;
      margin-left: 3.5vw;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div>© 2022 ProjectLearn</div>
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
        {/* <a
          href="https://opencollective.com/projectlearn"
          className="footer-content"
          target="_blank"
        >
          Donate
        </a> */}
      </div>
    </FooterWrapper>
  );
}
