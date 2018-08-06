import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    handleClick = () => {
        let newClicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClicks
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}