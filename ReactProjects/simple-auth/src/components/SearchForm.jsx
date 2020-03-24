import React, { Component } from 'react';

class SearchForm extends Component {
    state = { student:null  }
    render() { 
    let studentLogged = null;
    if(this.state.student!=null)
     studentLogged = <h1>Welcome! {this.state.student.name} of age {this.state.student.age}</h1>;
    return (
    <form id="StudentForm" onSubmit={this.handleSubmit}>
        <div className="container">
        <label><b>Search by ID: </b></label>
        <input type="text" placeholder="Enter ID" name="id" required/>
        <br/>
        <button type="submit">Search</button>
        </div>
        <div>{studentLogged}</div>
    </form>
          );

    }

    handleSubmit =(event) =>
    {
        event.preventDefault();
        let id = event.target.id.value;
        let apiPath= 'http://localhost:55875/api/Students/';
        fetch(apiPath+id)
        .then(result=>result.json())
        .then((data)=>{
            this.setState({student: data})
            console.log(this.state.student);
        })
        .catch(this.handleSearchCatch);
    }
    handleSearchCatch = ()=>
    {
      alert("Non-existing ID");
      this.setState({student:null});
      document.getElementById("StudentForm").reset();
     }
  
}
 
export default SearchForm;