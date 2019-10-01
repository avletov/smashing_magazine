import React, { Component } from "react";

import { Container, ImageWrapper, Image, Spinner, Button } from "./styles";

export class SettingsColor extends Component {
  render() {
    const { isRedVersion, handlerColorSettings } = this.props;

    return (
      <Container onClick={handlerColorSettings}>
        <ImageWrapper>
          <Image>
            <Spinner isRedVersion={isRedVersion}>
              <use xlinkHref="./img/sprite.svg#SETTINGS_IMAGE"></use>
            </Spinner>
          </Image>
        </ImageWrapper>
        <Button isRedVersion={isRedVersion}>
          {isRedVersion ? "Seriously, red?" : "Bring red back!"}
        </Button>
      </Container>
    );
  }
}
