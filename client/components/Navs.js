import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navs extends Component {
  render(){
    return (
        <Nav bsStyle="pills">
          <NavItem><Link to='/'>Home</Link></NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Chat Room</NavItem>
          <NavDropdown title='Sign In/Register'>
            <MenuItem><Link to='register'>Register</Link></MenuItem>
            <MenuItem>Sign In</MenuItem>
          </NavDropdown>
        </Nav>
    )
  }
}

export default Navs;
