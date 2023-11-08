import React, { Component } from "react";
import styled from "styled-components";

import nameCheapLogo from "../../../img/powered-by-namecheap-black.png"

import CategoryInfo from "./CategoryInfo";
import Categories from "./Categories";

const SidebarWrapper = styled.div`
  display: grid;
  position: fixed;
  left: 0;
  grid-template-rows: 30vh 60vh 10vh;
  width: 20vw;
  .footer {
    display: flex;
    padding-left: 3vh;
    font-size: 1.1vw;
    color: var(--theme-grey);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    a{width: 50%}
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <CategoryInfo slug={this.props.slug} color={this.props.color} />
        <Categories slug={this.props.slug} url={this.props.url} color={this.props.color} />
        <div className="footer">© 2023 ProjectLearn<a
          href="https://www.namecheap.com"
          className="img-link"
          target="_blank"
        ><img src={nameCheapLogo} width={'100%'} alt="Powered by Namecheap" /></a></div>
      </SidebarWrapper>
    );
  }
}
