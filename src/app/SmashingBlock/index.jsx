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

import { Form } from "./Form";

export class SmashingBlock extends Component {
  render() {
    const { img, title, text, button } = this.props.data;
    const { order, type } = this.props;

    return (
      <Container order={order} type={type}>
        <Illustration src={img} type={type}></Illustration>
        <Title href={title.href}>{title.text}</Title>
        <Text>{text}</Text>
        {type === "newsletter" ? (
          <Form></Form>
        ) : (
          <Button href={button.href}>{button.inner}</Button>
        )}
        <SignIn type={type}>
          {type !== "newsletter" ? (
            <React.Fragment>
              Already have an account? <Link href="#">Sign-in!</Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link href="#">Useful tips for web designers.</Link> Sent 2× a
              month. You can unsubscribe any time — obviously.
            </React.Fragment>
          )}
        </SignIn>
      </Container>
    );
  }
}
