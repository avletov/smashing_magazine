import React, { Component } from "react";

import { Header } from "./Header";
import { LatestArticles } from "./LatestArticles";
import { LatestPosts } from "./LatestPosts";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LatestArticles />
        <LatestPosts />
      </React.Fragment>
    );
  }
}
