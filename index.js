// Main function to build the complete form
let buildForm = (inputs) => {

  // Iterate through each input
  inputs.map(inputFactory);
}

// Factory for building different input types
let inputFactory = (input) => {

  // Currently accepted input types
  let acceptedInputTypes = [
    'text', 'email', 'password', 'hidden', 'reset', 'submit'
  ];

  // Check if input type is accepted or throw exception
  if(input.type && acceptedInputTypes.includes(input.type)) {

    let outputString = `<input type="${input.type}"`;
    console.log(outputString);

  } else {
    console.log('INVALID');
    // TODO: Throw invalid input type exception
  }

}

// Dummy data, remove before production.
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
