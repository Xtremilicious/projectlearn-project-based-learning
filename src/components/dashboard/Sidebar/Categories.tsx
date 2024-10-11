import React, { Component } from "react";
import styled from "styled-components";
import { webDev, gameDev, mobDev, mlAI } from "../../../utils/technologies";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faNodeJs,
  faVuejs,
  faCuttlefish,
  faMicrosoft,
  faPython,
  faGoogle,
  faKickstarterK,
  faAndroid,
  faApple,
  faJava,
  faSwift,
  faReact,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { faInfinity, faCode } from "@fortawesome/free-solid-svg-icons";
library.add(
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faNodeJs,
  faVuejs,
  faCuttlefish,
  faMicrosoft,
  faPython,
  faGoogle,
  faKickstarterK,
  faAndroid,
  faApple,
  faJava,
  faSwift,
  faReact,
  faUnity
);

const CategoryWrapper = styled.div`
  .cats {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .section-title {
      font-size: 2vw;
      padding: 3vh;
      color: white;
      margin-top: 1vh;
    }
    .cat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      justify-items: center;
      text-align: center;
      color: var(--theme-grey);
      overflow-y: scroll;
    }
    .cat-grid-item {
      font-size: 2vw;
      height: 5.3vw;
      width: 5.3vw;
      border-radius: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      /* background-color: var(${(props) => props.bg}-alt); */
      padding: 1.2vw;
      :hover {
        color: var(${(props) => props.bg}-alt);
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
      padding: 1.2vw;
      color: var(${(props) => props.bg}-alt);
    }
    .cat-title {
      margin-top: 1vh;
      font-size: 1.2vw;
    }
  }
`;
const Categories = (props) => {
  const {
    query: { tech },
  } = useRouter();

  const router = useRouter();

  const techCategories =
    props.slug === "web-dev"
      ? webDev
      : props.slug === "mob-dev"
      ? mobDev
      : props.slug === "game-dev"
      ? gameDev
      : mlAI;

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace({ pathname, query: params.toString() }, undefined, {
      shallow: true,
    });
  };

  return (
    <CategoryWrapper bg={props.color}>
      <div className="cats">
        <div className="section-title">Technologies</div>
        <div className="cat-grid">
          <span
            onClick={() => {
              removeQueryParam("tech");
            }}
          >
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
          </span>
          {techCategories.map((item, index) =>
            tech === item.category ? (
              <div className="cat-grid-item-selected" key={index}>
                {item.icon ? (
                  <FontAwesomeIcon icon={["fab", item.icon]} />
                ) : (
                  <FontAwesomeIcon icon={faCode} />
                )}
                <div className="cat-title">{item.category}</div>
              </div>
            ) : (
              <Link
                href={{
                  query: { tech: item.category },
                }}
                key={index}
              >
                <div className="cat-grid-item">
                  {item.icon ? (
                    <FontAwesomeIcon icon={["fab", item.icon]} />
                  ) : (
                    <FontAwesomeIcon icon={faCode} />
                  )}
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
