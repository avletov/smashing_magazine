import React, { Component } from "react";

import { Container, ImageWrapper, Image, Spinner, Button } from "./styles";

export class SettingsColor extends Component {
  render() {
    return (
      <Container>
        <ImageWrapper>
          <Image>
            <Spinner></Spinner>
          </Image>
        </ImageWrapper>
        <Button></Button>
      </Container>
    );
  }
}
