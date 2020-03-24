import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <SearchForm />
      <br/>
      <RegisterForm/>
    </React.Fragment>
    );
  }
}

export default App;