import React, { Component } from 'react';
import FirstForm from './components/FirstForm'

class App extends Component {
  render()
  {
    return (
      <div id="container">
        <FirstForm resetHandler={this.reset} />
      </div>
    );
  }
  reset()
  {
    document.getElementById("simpleForm").reset();
  }

}

export default App;
