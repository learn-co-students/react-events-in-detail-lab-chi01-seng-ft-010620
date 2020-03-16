// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    btnClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <button onClick={this.btnClick}>click the button</button>

            </div>
        )
    }
}

export default CoordinatesButton
