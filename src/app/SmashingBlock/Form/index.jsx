import React, { Component } from "react";

import { Container, Label, Placeholder, Input, Button } from "./styles";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isFocus: false };
  }

  onFocusHandler = () => {
    this.setState(state => (state.isFocus = true));
    console.log(this.state);
  };

  onBlurHandler = () => {
    this.setState(state => (state.isFocus = false));
    console.log(this.state);
  };

  render() {
    const { isFocus } = this.state;

    return (
      <Container>
        <Label>
          <Placeholder
            onClick={this.onFocusHandler}
            onMouseDown={this.onFocusHandler}
            isFocus={isFocus}
          >
            Your (smashing) email
          </Placeholder>
          <Input
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
          ></Input>
        </Label>
        <Button>Subscribe →</Button>
      </Container>
    );
  }
}
