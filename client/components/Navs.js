import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Navs extends Component {
  render(){
    return (
        <Nav bsStyle="pills">
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Messaging</NavItem>
        </Nav>
    )
  }
}

export default Navs;
