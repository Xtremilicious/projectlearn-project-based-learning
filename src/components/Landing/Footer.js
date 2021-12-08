import React from "react";
import styled from "styled-components";
import Newsletter from "./Newsletter";

const FooterWrapper = styled.div`
  margin: 0vh 5vw;
  padding: 3vh 3vh 0;
  font-size: 1rem;
  background: var(--theme-pink);
  color: var(--theme-grey);
  border-radius: 1vw;
  
  h4{
    text-align: center;
    padding-top:10px;
    padding-bottom: 5px;
  }
 .footer-container{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  

  .left{
    flex:2;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .right{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content: center;
    a{
      font-size: 2.7vh;
      color: var(--mainDark);
      font-weight:bold;
      margin: 5px;
    }
  }
 }
 @media only screen and (max-width: 820px){
   .footer-container{
    flex-direction:column;
   }
     .left{

    }
    .right{
        flex:1;
        flex-direction:row;
        ${'' /* justify-content: center; */}
        align-items: center;
        margin-top: 25px;
    }
 }
`;

export default function Footer() {
  return (
    <FooterWrapper>
    <div className="footer-container">
    <div className="left">
    <Newsletter/>
    </div>

    <div className="right">
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
  <a
    href="https://github.com/Xtremilicious/projectlearn-project-based-learning"
    className="footer-content mobile"
    target="_blank"
  >
    Github Repo
  </a>
    {/* <a
    href="https://opencollective.com/projectlearn"
    className="footer-content"
    target="_blank"
  >
    Donate
  </a> */}
    </div>
    </div>
      <h4>© 2020 ProjectLearn</h4>
    </FooterWrapper>
  );
}
