import React, { Component } from "react";

import { Menu } from "./Menu";
import { Search } from "./Search";
import { Topics } from "./Topics";

import { Container } from "./styles";

import { menuData, topicsData } from "../../mock/data";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowSearch: false };
  }

  handlerButton = () => {
    this.setState(({ isShowSearch }) => ({ isShowSearch: !isShowSearch }));
  };

  render() {
    const { isShowSearch } = this.state;

    return (
      <Container>
        <Menu
          menuData={menuData}
          handlerButton={this.handlerButton}
          isShowSearch={isShowSearch}
        ></Menu>
        <Search isShowSearch={isShowSearch}></Search>
        <Topics topicsData={topicsData} isShowTopics={isShowSearch}></Topics>
      </Container>
    );
  }
}
