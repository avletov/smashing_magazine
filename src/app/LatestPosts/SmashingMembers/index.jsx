import React, { Component } from "react";

import {
  Container,
  Illustration,
  Title,
  Text,
  Button,
  SignIn,
  Link
} from "./styles";

export class SmashingMembers extends Component {
  render() {
    const { img, title, text, button } = this.props.data;
    const { order, isSecond } = this.props;

    return (
      <Container order={order} isSecond={isSecond}>
        <Illustration src={img}></Illustration>
        <Title href={title.href}>{title.text}</Title>
        <Text>{text}</Text>
        <Button href={button.href}>{button.inner}</Button>
        <SignIn>
          Already have an account? <Link href="#">Sign-in!</Link>
        </SignIn>
      </Container>
    );
  }
}
