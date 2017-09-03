import React, { Component } from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navs extends Component {
  render(){
    return (
        <Nav bsStyle="pills">
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Chat Room</NavItem>
          <NavDropdown title='Sign In/Sign Out'>
            <MenuItem>Sign Out</MenuItem>
            <MenuItem>Sign In</MenuItem>
          </NavDropdown>
        </Nav>
    )
  }
}

export default Navs;
