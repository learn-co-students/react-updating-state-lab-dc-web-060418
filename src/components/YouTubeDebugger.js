// Code YouTubeDebugger Component Here
import React, {Component} from "react"


class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null, 
            settings: { 
                bitrate: 8, 
                video: { resolution: '1080p' } 
            }
        }
    }

    bitrateHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateHandler}>
                    bitrate
                </button>

                <button className="resolution" onClick={this.resolutionHandler}>
                    resolution
                </button>
            </div>
        )
    }

}

export default YouTubeDebugger;