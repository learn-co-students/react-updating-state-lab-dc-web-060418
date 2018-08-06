// Code DigitalClicker Component Here
import React,{ Component } from "react";

class DigitalClicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    onClickHandler = ()=>{
        let currentClicked = this.state.timesClicked
        this.setState({timesClicked: currentClicked+1})
    }

    render(){
        return (<button onClick={this.onClickHandler}>{this.state.timesClicked}</button>)
    }
}

export default DigitalClicker