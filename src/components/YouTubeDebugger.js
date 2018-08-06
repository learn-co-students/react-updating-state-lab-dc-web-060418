import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeResolution = () => {
    let newResolution = '720p'
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: newResolution
        }
      }
    })
  }

  changeBitrate = () => {
    let newBitrate = 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: newBitrate
      }
    })
  }


  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger
