import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';

class Register extends Component {

constructor(props){
  super(props)
  this.state = {
    value: '',
    confirmValue: ''
  }
}

  getValidationState(){
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
  this.setState({ value: e.target.value });
}

  render(){
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <form>
            <FormGroup controlId='formBasicText' validationState={this.getValidationState()}>
              <FormControl type='text' placeholder='username'/>
              <ControlLabel>Must be greater than 10 characters</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Password"
                onChange={this.handleChange.bind(this)}
              />
              <Button bsStyle='primary' block>Login With Facebook</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
