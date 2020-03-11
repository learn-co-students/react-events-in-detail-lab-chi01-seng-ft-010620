// Code CoordinatesButton Component Here
import React,{ Component } from "react";

export default class CoordinatesButton extends Component{
newMouseLocation=(event)=>{
    
    console.log("new mouse event",event)
    let array=[event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
}

    render(){
        return <button onClick={(event)=>{let eventSaved = event; this.newMouseLocation(eventSaved)}}></button>
    }
}

