import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faPalette } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Wrapper = styled.nav`
  background: transparent;
  background-repeat: repeat;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  
  .nav-linker{
    text-decoration: none;
    color: black;
  }
  .card-category {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 28.5vw;
    border-radius: 1rem;
  }
  .icon-container {
    padding: 0.7rem;
    font-size: 2.2rem;
    color: white;
    width: 5.5vw;
    border-radius: 1rem 0 0 1rem;
    background: #0f9d58;
  }
  .category {
    font-size: 1.6rem;
    padding-left: 0.7rem;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
    margin-left: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  .card-category{
    width: 80vw;
    margin-bottom: 0.7rem;
  }
  .icon-container {
      width: 3rem;
      font-size: 1.2rem;
  }
  .category {
    font-size: 1rem;
  }
  }
`;

export default function Categories() {
  return (
    <Wrapper className="row">
      <div className="col-lg-4 col-12 d-flex flex-row justify-content-center align-items-center">
        <Link to="/learn/programming-language" className="nav-linker">
          <div className="card-category d-flex flex-row align-items-center">
            <div className="icon-container text-center">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="category">Programming Language</div>
          </div>
        </Link>
      </div>
      <div className="col-lg-4 col-12 d-flex flex-row justify-content-center align-items-center">
      <Link to="/learn/web-development" className="nav-linker">
        <div className="card-category d-flex flex-row  align-items-center">
          <div className="icon-container text-center">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="category">Web Development</div>
        </div>
        </Link>
      </div>
      <div className="col-lg-4 col-12 d-flex flex-row justify-content-center align-items-center">
      <Link to="/learn/design" className="nav-linker">
        <div className="card-category d-flex flex-row align-items-center">
          <div className="icon-container text-center">
            <FontAwesomeIcon icon={faPalette} />
          </div>
          <div className="category">Design & Inspiration</div>
        </div>
        </Link>
      </div>
    </Wrapper>
  );
}
