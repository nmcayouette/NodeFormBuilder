// Main function to build the complete form
let buildForm = (inputs) => {

  // Iterate through each input
  inputs.map(buildInput);
}

// Factory for building different input types
let buildInput = (input) => {
  console.log('Hello World! I am an input:', input.type);

}

let testFields = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name'
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name'
  },
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  },
  {
    name: 'csrf',
    type: 'hidden',
    value: 'wgPbQMS_fJL@RO6ZTwc-nmS1$1a7R9L('
  },
  {
    type: 'reset',
    value: 'Clear Form'
  },
  {
    type: 'submit',
    value: 'Send Form'
  }
]
buildForm(testFields);
