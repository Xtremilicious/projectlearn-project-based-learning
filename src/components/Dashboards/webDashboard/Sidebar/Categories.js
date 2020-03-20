import React, { Component } from "react";
import styled from "styled-components";
import { webDev } from "../../../../utils/technologies";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faNodeJs,
  faVuejs,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
library.add(
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faNodeJs,
  faVuejs,
  faPython
);

const CategoryWrapper = styled.div`
  .cats {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .section-title {
      font-size: 4.5vh;
      padding: 3vh;
      color: var(--theme-grey);
      margin-top: 1vh;
    }
    .cat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      justify-items: center;
      align-content: center;
      text-align: center;
      color: var(--theme-grey);
    }
    .cat-grid-item {
      font-size: 2.8vw;
      height: 5.3vw;
      width: 5.3vw;
      border-radius: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      /* background-color: var(--dashboard-purple-alt); */
      padding: 1.2vw;
      :hover {
        color: var(--dashboard-purple-alt);
        transition: 0.4s;
      }
    }
    .cat-grid-item-selected {
      font-size: 2.8vw;
      height: 5.3vw;
      width: 5.3vw;
      border-radius: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      /* background-color: var(--dashboard-purple-alt); */
      padding: 1.2vw;
      color: var(--dashboard-purple-alt);
    }
    .cat-title {
      margin-top: 1vh;
      font-size: 2.5vh;
    }
  }
`;
const Categories = props => {
  const {
    query: { tech }
  } = useRouter();
  return (
    <CategoryWrapper>
      <div className="cats">
        <div className="section-title">Technologies</div>
        <div className="cat-grid">
          <Link href={{ pathname: "web-development" }}>
            {tech != null ? (
              <div className="cat-grid-item">
                <FontAwesomeIcon icon={faInfinity} />
                <div className="cat-title">Show All</div>
              </div>
            ) : (
              <div className="cat-grid-item-selected">
                <FontAwesomeIcon icon={faInfinity} />
                <div className="cat-title">Show All</div>
              </div>
            )}
          </Link>
          {webDev.map(item =>
            tech === item.category ? (
              <div className="cat-grid-item-selected">
                <FontAwesomeIcon icon={["fab", item.icon]} />
                <div className="cat-title">{item.category}</div>
              </div>
            ) : (
              <Link
                href={{
                  pathname: "web-development",
                  query: { tech: item.category }
                }}
              >
                <div className="cat-grid-item">
                  <FontAwesomeIcon icon={["fab", item.icon]} />
                  <div className="cat-title">{item.category}</div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </CategoryWrapper>
  );
};

export default Categories;
