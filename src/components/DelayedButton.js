import React from "react";

export default class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        // this.props.onDelayedClick("wat")
        return (
            <button
            onClick={this.handleClick}></button>
        )
    }
}