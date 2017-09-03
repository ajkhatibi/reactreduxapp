import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class Greetings extends Component {
  render(){
    return (
      <Jumbotron>
        <h1>Welcome To Akbar's React App</h1>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    )
  }
}

export default Greetings;
