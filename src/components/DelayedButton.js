import React from 'react'

class DelayedButton extends React.Component {

	handleClick = (e) => {
		e.persist()
		return window.setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
	}


	render() {
		return(
		<button onClick={this.handleClick}>wait</button>
		)
	}
}

export default DelayedButton