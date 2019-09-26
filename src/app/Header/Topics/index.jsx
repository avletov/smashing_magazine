import React, { Component } from "react";

import { Container, Title, List, Item, Link } from "./styles";

export class Topics extends Component {
  render() {
    const { topicsData, isShowTopics } = this.props;

    return (
      <Container isShowTopics={isShowTopics}>
        <Title>BROWSE ALL TOPICS</Title>
        <List>
          {topicsData.map(topic => {
            const { id, name, url } = topic;

            return (
              <Item key={id}>
                <Link href={url}>{name}</Link>
              </Item>
            );
          })}
        </List>
      </Container>
    );
  }
}
