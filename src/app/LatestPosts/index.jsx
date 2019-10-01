import React, { Component } from "react";

import { Supporters } from "./Supporters";
import { SmashingMembers } from "./SmashingMembers";

import {
  Container,
  Post,
  PostWrapper,
  Ago,
  Title,
  Author,
  AuthorLink,
  Content,
  InsertBlock
} from "./styles";

import { latestPostData } from "../../mock/data";

export class LatestPosts extends Component {
  render() {
    const orderLayoutForPosts = [1, 2, 3, 5, 6, 7, 8];

    return (
      <Container>
        {latestPostData.map(({ daysAgo, title, author, content, link }, i) => {
          const { name, linkToAuthor } = author;

          return (
            <PostWrapper order={orderLayoutForPosts[i]}>
              <Post href={link}>
                <Ago>{daysAgo} DAYS AGO</Ago>
                <Title>{title}</Title>
                <Author>
                  By<AuthorLink href={linkToAuthor}>{name}</AuthorLink>
                </Author>
                <Content>{content}</Content>
              </Post>
            </PostWrapper>
          );
        })}
        <InsertBlock>
          <Supporters></Supporters>
          <SmashingMembers></SmashingMembers>
        </InsertBlock>
      </Container>
    );
  }
}
