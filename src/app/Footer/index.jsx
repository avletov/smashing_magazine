import React, { Component } from "react";

import {
  Container,
  Main,
  Img,
  ImgBottom,
  Content,
  Notes,
  Note,
  NoteLink,
  NoteSpan,
  Links,
  Item,
  ItemLink
} from "./styles";
import { Topics } from "../Header/Topics";

import { topicsData, footerData } from "../../mock/data";

export class Footer extends Component {
  renderLinks = () => {
    return (
      <Links>
        {footerData.map(({ name, href }) => {
          return (
            <Item key={name}>
              <ItemLink href={href}>{name}</ItemLink>
            </Item>
          );
        })}
      </Links>
    );
  };

  renderNotes = () => {
    return (
      <Notes>
        <Note>
          <NoteSpan>
            With a commitment to quality content for the design community.
          </NoteSpan>
        </Note>
        <Note>Founded by Vitaly Friedman and Sven Lennartz. 2006–2019.</Note>
        <Note>
          Smashing is proudly running on <NoteLink href="#">Netlify.</NoteLink>
        </Note>
        <Note>
          Fonts by <NoteLink href="#">Latinotype.</NoteLink>
        </Note>
      </Notes>
    );
  };

  render() {
    return (
      <Container>
        <Topics
          location={"footer"}
          isShowTopics={true}
          topicsData={topicsData}
        ></Topics>
        <Main>
          <Img src="../../img/footer-left.svg"></Img>
          <Content>
            {this.renderNotes()}
            {this.renderLinks()}
          </Content>
          <Img src="../../img/footer-right.svg"></Img>
          <ImgBottom src="../../img/footer-bottom.svg"></ImgBottom>
        </Main>
      </Container>
    );
  }
}
