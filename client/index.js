import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';

class App extends Component {
  render(){
    return(
      <div>
        Hey there
        <Home/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
