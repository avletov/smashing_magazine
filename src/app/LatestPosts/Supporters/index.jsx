import React, { Component } from "react";

import { Container, Logo, Heading, Text, Button } from "./styles";

export class Supporters extends Component {
  render() {
    return (
      <Container>
        <Logo src="https://delivery.smashing.services/catch?uri=https://res.cloudinary.com/indysigner/image/upload/v1567524602/ads/Flatfile-logo-horizontal-white-transparent.svg"></Logo>
        <Heading>F L A T F I L E</Heading>
        <Text>
          Create a delightful data import experience for customers without weeks
          of development with Flatfile.
        </Text>
        <Button href="#">TRY IT FREE</Button>
      </Container>
    );
  }
}
