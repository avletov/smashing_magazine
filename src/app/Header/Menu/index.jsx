import React, { Component } from "react";

import {
  ContainerMenu,
  Nav,
  List,
  Item,
  Link,
  Icon,
  ItemTitle,
  ItemSubtitle,
  Logo,
  Button
} from "./styles";

export class Menu extends Component {
  render() {
    const { menuData } = this.props;

    return (
      <ContainerMenu>
        <Logo>
          <use xlinkHref="./img/sprite.svg#HEADER_LOGO"></use>
        </Logo>
        <Nav>
          <List>
            {menuData.map(item => {
              const { id, title, subtitle, icon, link } = item;

              return (
                <Item key={id}>
                  <Link href={link}>
                    <Icon>
                      <use xlinkHref={icon}></use>
                    </Icon>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemSubtitle>{subtitle}</ItemSubtitle>
                  </Link>
                </Item>
              );
            })}
          </List>
        </Nav>
        <Button>🔍 Topics</Button>
      </ContainerMenu>
    );
  }
}
