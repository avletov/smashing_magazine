import React, { Component } from "react";

import { Container, Input, SearchBy } from "./styles";

export class Search extends Component {
  render() {
    const { isShowSearch } = this.props;
    const display = isShowSearch ? "flex" : "none";

    return (
      <Container display={display}>
        <Input placeholder="Search Smashing..."></Input>
        <SearchBy>
          <use xlinkHref={"./img/sprite.svg#SEARCH__BY"}></use>
        </SearchBy>
      </Container>
    );
  }
}
