import React, { Component } from 'react';

class RegisterForm extends Component {
    state = {  }
    render() { 
        return (
          <form id="StudentRegister" onSubmit={this.handleRegister}>
           <div className="container">
           <label><b>Register Student: </b></label>
           <input type="text" placeholder="Enter name" name="name" required/>
           <br/>
           <input type="text" placeholder="Enter age" name="age" required/>
           <br/>
           <button type="submit">Register</button>
           </div>
          </form>
          );
    }
    handleRegister = (event) =>
    {
        event.preventDefault();
        let studentName = event.target.name.value;
        let studentAge = event.target.age.value;
        let apiPostPath = 'http://localhost:55875/api/Students';
        fetch(apiPostPath,
        {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 0,
                name: studentName,
                age: studentAge
            }),
        })
        alert("Registered new student");
    }
}
 
export default RegisterForm;