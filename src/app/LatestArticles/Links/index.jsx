import React, { Component } from "react";

import {
  ArticleLink,
  Author,
  PhotoWrapper,
  Photo,
  Name,
  Wrote,
  Content,
  Comments,
  HashtagsList,
  Hashtag,
  HashtagId,
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
        comments,
        link,
        hashtags
      } = article;

      const { number, href } = comments;

      return (
        <ArticleLink isRedVersion={isRedVersion} id={id} key={id} href={link}>
          <Author href={authorLink}>
            <PhotoWrapper>
              <Photo photo={photo}></Photo>
            </PhotoWrapper>
            <Name isRedVersion={isRedVersion}>{author}</Name>
            <Wrote isRedVersion={isRedVersion}>wrote</Wrote>
          </Author>
          <Content isRedVersion={isRedVersion}>{content}</Content>
          <Comments isRedVersion={isRedVersion}>{number} Comments</Comments>
          <HashtagsList>
            {hashtags.map(hashtag => {
              const { name, id, link } = hashtag;

              return (
                <Hashtag key={id}>
                  <HashtagLink isRedVersion={isRedVersion} href={link}>
                    {name}
                    <HashtagId>{id}</HashtagId>
                  </HashtagLink>
                </Hashtag>
              );
            })}
          </HashtagsList>
        </ArticleLink>
      );
    });
  }
}
