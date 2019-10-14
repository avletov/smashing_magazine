import React, { Component } from "react";

import { Container, Title, List, Item, Link } from "./styles";

export class Topics extends Component {
  renderTopics = () => {
    const { topicsData, location } = this.props;

    return topicsData.map(topic => {
      const { id, name, url } = topic;

      return (
        <Item key={id}>
          <Link href={url} location={location}>
            {name}
          </Link>
        </Item>
      );
    });
  };

  render() {
    const { isShowTopics, location } = this.props;

    return (
      <Container isShowTopics={isShowTopics} location={location}>
        <Title location={location}>
          {location === "header"
            ? "BROWSE ALL TOPICS"
            : "BROWSE ALL SMASHING MAGAZINE TOPICS"}
        </Title>
        <List>{this.renderTopics()}</List>
      </Container>
    );
  }
}
