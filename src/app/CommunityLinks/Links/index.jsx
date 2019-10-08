import React, { Component } from "react";

import {
  Container,
  Post,
  LeftBlock,
  RightBlock,
  PhotoWrapper,
  Photo,
  Author,
  AuthorLink,
  Title,
  Content,
  Date
} from "./styles";

export class Links extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container>
        {data.map(({ author, photo, date, title, content, link }) => {
          return (
            <Post>
              <LeftBlock>
                <PhotoWrapper href="#">
                  <Photo src={photo}></Photo>
                </PhotoWrapper>
                <Author isLeft={true}>
                  <AuthorLink href={link}>{author.name}</AuthorLink> wrote
                </Author>
              </LeftBlock>
              <RightBlock>
                <Author isLeft={false}>
                  <AuthorLink href={link}>{author.name}</AuthorLink> wrote
                </Author>
                <Title>{title}</Title>
                <Content>
                  <Date>{date.toUpperCase()}</Date> — {content}
                </Content>
              </RightBlock>
            </Post>
          );
        })}
      </Container>
    );
  }
}
