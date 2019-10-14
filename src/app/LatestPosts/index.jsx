import React, { Component } from "react";

import { Supporters } from "./Supporters";
import { SmashingBlock } from "../SmashingBlock";

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
  VerticalHeader
} from "./styles";

import {
  latestPostData,
  smashingMembersData1,
  smashingMembersData2
} from "../../mock/data";

export class LatestPosts extends Component {
  renderLatestPosts = () => {
    const orderLayoutForPosts = [1, 2, 3, 5, 6, 7, 8];

    return latestPostData.map(
      ({ daysAgo, title, author, content, link }, i) => {
        const { name, linkToAuthor } = author;

        return (
          <PostWrapper key={title} order={orderLayoutForPosts[i]}>
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
      }
    );
  };

  render() {
    return (
      <Container>
        {this.renderLatestPosts()}
        <InsertBlock order={4}>
          <Supporters></Supporters>
          <SmashingBlock
            type={"members"}
            data={smashingMembersData1}
          ></SmashingBlock>
        </InsertBlock>
        <SmashingBlock
          type={"tv"}
          isSecond={true}
          order={9}
          data={smashingMembersData2}
        ></SmashingBlock>
        <LoadMoreCont>
          <LoadMore href="#">SEE ALL LATEST ARTICLES →</LoadMore>
        </LoadMoreCont>
        <VerticalHeader type={"latest"}>LATEST POSTS</VerticalHeader>
      </Container>
    );
  }
}
