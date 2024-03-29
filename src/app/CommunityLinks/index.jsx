import React, { Component } from "react";

import { Links } from "./Links";

import {
  Container,
  LeftBlock,
  RightBlock,
  Desc,
  Photo,
  PhotoWrapper,
  Title,
  Content,
  TwitterLink
} from "./styles";

import { LoadMoreCont, LoadMore, VerticalHeader } from "../LatestPosts/styles";

import { communityLinksData } from "../../mock/data";

export class CommunityLinks extends Component {
  renderDesc = () => {
    const { personOfTheWeek } = communityLinksData;
    const { name, photo, twitter, twitterName, describe } = personOfTheWeek;

    return (
      <Desc>
        <LeftBlock>
          <PhotoWrapper>
            <Photo src={photo}></Photo>
          </PhotoWrapper>
        </LeftBlock>
        <RightBlock>
          <Title>PERSON OF THE WEEK</Title>
          <Content>
            {name} (<TwitterLink href={twitter}>{twitterName}</TwitterLink>){" "}
            {describe}
          </Content>
        </RightBlock>
      </Desc>
    );
  };

  render() {
    const { other } = communityLinksData;

    return (
      <Container>
        {this.renderDesc()}
        <Links data={other}></Links>
        <LoadMoreCont>
          <LoadMore href="#">MORE LINKS ON TWITTER →</LoadMore>
        </LoadMoreCont>
        <VerticalHeader type={"community"}>COMMUNITY LINKS</VerticalHeader>
      </Container>
    );
  }
}
