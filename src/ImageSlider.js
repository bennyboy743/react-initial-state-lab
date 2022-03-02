// your ImageSlider code here!
import React, { Component } from "react";

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    incrementCounter = () => {
        const counter = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: counter
        })
    }
     
    render() {
        return (
            <div onClick={this.incrementCounter}>
                I am on slide: {this.state.currentSlideIndex}
            </div>
        )
    }
}