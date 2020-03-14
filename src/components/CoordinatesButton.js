import React from 'react'

class CoordinatesButton extends React.Component {
	
	handleClick = (e) => {
		return this.props.onReceiveCoordinates([e.clientX, e.clientY])
	}

	render() {
		return(
			<div>
				<button onClick={this.handleClick}>coordinatezzzz</button>
			</div>
		)
	}
}

export default CoordinatesButton

//this.props.onReceiveCoordinates