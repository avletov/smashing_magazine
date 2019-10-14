import React, { Component } from "react";

import { Header } from "./Header";
import { Main } from "./styles";
import { LatestArticles } from "./LatestArticles";
import { LatestPosts } from "./LatestPosts";
import { SmashingSection } from "./SmashingSection";
import { CommunityLinks } from "./CommunityLinks";
import { CuratedPosts } from "./CuratedPosts";
import { Footer } from "./Footer";

import { smashingData } from "../mock/data";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <LatestArticles />
          <LatestPosts />
          <SmashingSection isPrint={true} data={smashingData.print} />
          <CommunityLinks />
          <SmashingSection isPrint={false} data={smashingData.feature} />
          <CuratedPosts />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}
