import React, { Component } from 'react';
import Navs from './Navs.js';

class Home extends Component {
  render(){
    return(
    <div className="container">
      <Navs/>
      {this.props.children}
    </div>
    )
  }
}

export default Home;
