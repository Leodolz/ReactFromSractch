import React, { Component } from 'react';

class Hello extends Component {
    state = {  }
    render() { 
    return ( 
    <button onClick={this.props.onClickHandler}>
        Click me
    </button>);
    }
}
 
export default Hello;

