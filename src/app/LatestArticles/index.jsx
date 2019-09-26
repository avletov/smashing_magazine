import React, { Component } from "react";

import { Container, Title, TitleText } from "./styles";
import { SettingsColor } from "./SettingsColor";
import { Links } from "./Links";

export class LatestArticles extends Component {
  constructor(props) {
    super(props);
    this.state = { isRedVersion: true };
  }

  handlerColorSettings = () => {
    this.setState(({ isRedVersion }) => ({ isRedVersion: !isRedVersion }));
  };

  render() {
    const { isRedVersion } = this.state;

    return (
      <Container>
        <Title>
          <TitleText>Don’t Miss These Latest</TitleText>
          <TitleText>Articles</TitleText>
        </Title>
        <SettingsColor
          handlerColorSettings={this.handlerColorSettings}
        ></SettingsColor>
        <Links isRedVersion={isRedVersion}></Links>
      </Container>
    );
  }
}
