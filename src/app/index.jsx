import React, { Component } from "react";

import { Header } from "./Header";
import { LatestArticles } from "./LatestArticles";
import { LatestPosts } from "./LatestPosts";
import { Smashing } from "./Smashing";
import { CommunityLinks } from "./CommunityLinks";

import { smashingData } from "../mock/data";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LatestArticles />
        <LatestPosts />
        <Smashing isPrint={true} data={smashingData.print} />
        <CommunityLinks />
        <Smashing isPrint={false} data={smashingData.feature} />
      </React.Fragment>
    );
  }
}
