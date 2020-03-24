import React, { Component } from 'react';

class Square extends Component {
    state = {
        clicked: false
      }
    render() { 
        let classname = 'square'
        if(this.state.clicked)
            classname= 'clickedSquare'
        return ( 
            <button 
                className={classname} 
                onClick={()=>this.handleClick("five","six")}
                >O
            </button>
         );
    }
    handleClick =(parameter1, parameter2) =>
    {
        let newClicked = !this.state.clicked;
        this.setState({clicked:newClicked});
        alert("parameter "+parameter1+" accepted and also "+parameter2);
    }
}
 
export default Square;