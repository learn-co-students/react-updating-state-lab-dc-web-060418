// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalCLicker extends Component {

  handleClick = () => this.setState({ timesClicked: this.state.timesClicked + 1 });

  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }

}
