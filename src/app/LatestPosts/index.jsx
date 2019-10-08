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
  InsertBlock,
  LoadMoreCont,
  LoadMore,
  VerticalHeader,
  VerticalHeaderText
} from "./styles";

import {
  latestPostData,
  smashingMembersData1,
  smashingMembersData2
} from "../../mock/data";

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
        <InsertBlock order={4}>
          <Supporters></Supporters>
          <SmashingMembers data={smashingMembersData1}></SmashingMembers>
        </InsertBlock>
        <SmashingMembers
          isSecond={true}
          order={9}
          data={smashingMembersData2}
        ></SmashingMembers>
        <LoadMoreCont>
          <LoadMore href="#">SEE ALL LATEST ARTICLES →</LoadMore>
        </LoadMoreCont>
        <VerticalHeader type={"latest"}>LATEST POSTS</VerticalHeader>
      </Container>
    );
  }
}
