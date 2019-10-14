import React, { Component } from "react";

import { SmashingBlock } from "../SmashingBlock";

import {
  Container,
  PostWrapper,
  Post,
  Subtitle,
  Title,
  List,
  Item,
  Link
} from "./styles";

import { curatedPostsData, smashingMembersData3 } from "../../mock/data";

import { LoadMoreCont, LoadMore, VerticalHeader } from "../LatestPosts/styles";

export class CuratedPosts extends Component {
  renderPosts = () => {
    return curatedPostsData.map(({ title, list }) => {
      return (
        <PostWrapper key={title}>
          <Post>
            <Subtitle>GUIDES</Subtitle>
            <Title>{title}</Title>
            <List>{this.renderList(list)}</List>
          </Post>
        </PostWrapper>
      );
    });
  };

  renderList = list => {
    return list.map(({ name, link }, id) => {
      return (
        <Item key={id}>
          <Link href={link}>{name}</Link>
        </Item>
      );
    });
  };

  render() {
    return (
      <Container>
        {this.renderPosts()}
        <SmashingBlock
          type={"newsletter"}
          data={smashingMembersData3}
        ></SmashingBlock>
        <LoadMoreCont>
          <LoadMore href="#">SEE ALL ARTICLES →</LoadMore>
        </LoadMoreCont>
        <VerticalHeader type="curated">CURATED POSTS</VerticalHeader>
      </Container>
    );
  }
}
