import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faAngular
} from "@fortawesome/free-brands-svg-icons";

import CategoryInfo from "./CategoryInfo";
import Categories from "./Categories";

const SidebarWrapper = styled.div`
  display: grid;
  position: fixed;
  left: 0;
  grid-template-rows: 30vh 63vh 7vh;
  width: 25vw;
  .footer {
    display: flex;
    padding-left: 3vh;
    color: var(--theme-grey);
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <CategoryInfo />
        <Categories />
        <div className="footer">© 2020 ProjectLearn</div>
      </SidebarWrapper>
    );
  }
}
