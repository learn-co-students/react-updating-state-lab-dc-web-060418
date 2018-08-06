import React, { Component } from 'react'

class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementCounter = () => {
    let newTimesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: newTimesClicked
    })
  }

  render() {
    return(
      <button onClick={this.incrementCounter}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker
