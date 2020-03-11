// Code CoordinatesButton Component Here
import React, { Component } from 'react'
import DelayedButton from './DelayedButton.js'

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        // console.log(this.props)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return(
        <div> 
            <button onClick={this.handleClick}>

            </button>
        </div>
        )
    }
}