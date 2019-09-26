import React, { Component } from "react";

import { Header } from "./Header";
import { LatestArticles } from "./LatestArticles";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LatestArticles />
      </React.Fragment>
    );
  }
}
