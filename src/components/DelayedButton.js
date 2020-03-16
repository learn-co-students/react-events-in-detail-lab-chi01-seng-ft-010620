// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleClick =(event) => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    };
    render(){
        console.log(this.props)
        return(
            <div>
            <button onClick={this.handleClick}> Delayed </button>

            </div>
        )
    }
}

export default DelayedButton

// This component takes in one prop: onReceiveCoordinates. 
// This prop is a function passed down from index.js. 
// This function is currently just logging whatever is passed into it.