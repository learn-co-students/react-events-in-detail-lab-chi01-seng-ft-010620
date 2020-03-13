// Code CoordinatesButton Component Here
import React, {Componen} from 'react'

class CoordinatesButton extends React.Component{
     newfunction = (event) => {
         return this.props.onReceiveCoordinates([event.clientX, event.clientY])
     }
    render(){
        
        return(<button onClick={this.newfunction}>Coordinates</button>)
    }
}



export default CoordinatesButton