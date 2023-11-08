import React from "react";
import styled from "styled-components";

import nameCheapLogo from "../../img/powered-by-namecheap.png"

const FooterWrapper = styled.div`
  margin: 0vh 5vw;
  display: flex;
  padding: 3vh;
  font-size: 1.3vw;
  color: var(--themeTextSecondaryDark);

  .footer-sponsor{
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .footer-container {
    margin-left: auto;
    display: flex;
    a{
      display: flex;
    align-items: center;
    }
  }
  .footer-content {
    margin-right: 2rem;
    color: var(--themeTextSecondaryDark);
    
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0vh 1vw;
    font-size: 4vw;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    .footer-container {
      display: none;
    }

    img{
      width: 50%;
    }
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
      <div className="footer-sponsor">© 2023 ProjectLearn</div>

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
      <img src={nameCheapLogo} width={'14%'} alt="Powered by Namecheap" />
    </FooterWrapper>
  );
}
