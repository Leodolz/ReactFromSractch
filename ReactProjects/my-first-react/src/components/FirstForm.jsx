import React, { Component } from 'react';

class FirstForm extends Component {
    state = {
        username: null,
      }
    render() { 
        let welcomingUser = null;
        if(this.state.username)
            welcomingUser= <h1>Welcome! {this.state.username}</h1>
        return (
        <React.Fragment>
            <form id="simpleForm" onSubmit={this.handleSubmit}>
                <div>
                    <label><b>Introduce your name: </b></label>
                    <input type="text" placeholder="Enter Name" name="name"/>
                    <br/>
                    <button type="submit" >Submit</button>
                    <button onClick = {this.props.resetHandler}>Reset</button>
                </div>
                {welcomingUser}
            </form>
        </React.Fragment>
        );
    }
    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.setState({username:event.target.name.value});
    }
}
 
export default FirstForm;

