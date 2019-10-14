import React, { Component } from "react";

import {
  Container,
  SubTitle,
  Title,
  Text,
  Button,
  Img,
  ImgWrapper
} from "./styles";

export class SmashingSection extends Component {
  render() {
    const { subtitle, title, text, button, background } = this.props.data;
    const { isPrint } = this.props;

    return (
      <Container isPrint={isPrint}>
        <SubTitle isPrint={isPrint}>{subtitle}</SubTitle>
        <Title isPrint={isPrint}>{title}</Title>
        <Text isPrint={isPrint}>{text}</Text>
        <Button isPrint={isPrint} href={button.href}>
          {button.inner}
        </Button>
        <ImgWrapper isPrint={isPrint}>
          <Img src={background} isPrint={isPrint}></Img>
        </ImgWrapper>
      </Container>
    );
  }
}
