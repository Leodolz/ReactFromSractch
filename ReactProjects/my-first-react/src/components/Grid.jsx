import React, { Component } from 'react';
import Square from './Square'

class Grid extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Square/>
                <Square/>
                <Square/>
                <br/>
                <Square/>
                <Square/>
                <Square/>
            </React.Fragment>
         );
    }
}
 
export default Grid;