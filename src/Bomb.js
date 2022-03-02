// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }

    }
    render(){
        return (
            <div>
               {this.state.count >= 0 ?  <p>{this.state.count} seconds left before I go boom!</p> : <p>BOOM</p>} 
            </div>
        )
    }

    componentDidMount() {
        this.decreaseTime = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.decreaseTime)
    }
}