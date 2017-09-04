// import React from { Component } from 'react';
// import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
//
// class RegisterForm extends Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//       value: ''
//     }
//   }
//
//     getValidationState(){
//       const length = this.state.value.length;
//       if (length > 10) return 'success';
//       else if (length > 5) return 'warning';
//       else if (length > 0) return 'error';
//     }
//
//     handleChange(e) {
//     this.setState({ value: e.target.value });
//   }
//
//   render(){
//     return (
//       <form>
//         <FormGroup controlId='formBasicText' validationState={this.getValidationState()}>
//           <ControlLabel>Must be greater than 10 characters</ControlLabel>
//           <FormControl
//             type="text"
//             value={this.state.value}
//             placeholder="Password"
//             onChange={this.handleChange}
//           />
//         </FormGroup>
//       </form>
//     )
//   }
// }
//
// export default RegisterForm;
