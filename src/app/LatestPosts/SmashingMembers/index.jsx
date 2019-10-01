import React, { Component } from "react";

import {
  Container,
  Illustration,
  Membership,
  Text,
  Button,
  SignIn
} from "./styles";

export class SmashingMembers extends Component {
  render() {
    return (
      <Container>
        <Illustration src="https://d33wubrfki0l68.cloudfront.net/aea2faf51cc69a1e10bb434aa92f7c3821f16787/e4922/images/smashing-cat/singing-barista.svg"></Illustration>
        <Membership>1, 620 smashing members</Membership>
        <Text>
          A friendly community that keeps this website alive. With books,
          webinars, discounts and networking — for just 1 coffee a month. Join
          the family.
        </Text>
        <Button href="#">Explore features →</Button>
        <SignIn>Already have an account? Sign-in!</SignIn>
      </Container>
    );
  }
}
