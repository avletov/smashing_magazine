import React, { Component } from "react";

import {
  ArticleLink,
  Author,
  PhotoWrapper,
  Photo,
  Name,
  Wrote,
  Content,
  HashtagsList,
  Hashtag,
  HashtagLink
} from "./styles";

import { latestArticlesData } from "../../../mock/data";

export class Links extends Component {
  render() {
    const { isRedVersion } = this.props;

    return latestArticlesData.map(article => {
      const {
        id,
        author,
        authorLink,
        photo,
        content,
        link,
        hashtags
      } = article;

      return (
        <ArticleLink isRedVersion={isRedVersion} id={id} key={id} href={link}>
          <Author href={authorLink}>
            <PhotoWrapper>
              <Photo photo={photo}></Photo>
            </PhotoWrapper>
            <Name>{author}</Name>
            <Wrote>wrote</Wrote>
          </Author>
          <Content>{content}</Content>
          <HashtagsList>
            {hashtags.map(hashtag => {
              const { name, id, link } = hashtag;

              return (
                <Hashtag key={id}>
                  <HashtagLink href={link}>{name}</HashtagLink>
                </Hashtag>
              );
            })}
          </HashtagsList>
        </ArticleLink>
      );
    });
  }
}
