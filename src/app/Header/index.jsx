import React, { Component } from "react";

import { Menu } from "./Menu";

import { Container } from "./styles";

import { menuData } from "../../mock/data";

export class Header extends Component {
  render() {
    return (
      <Container>
        <Menu menuData={menuData}></Menu>
      </Container>
    );
  }
}
