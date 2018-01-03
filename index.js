// Main function to build the complete form
let buildForm = (inputs) => {

  // Check if inputs variable is an array or throw exception
  if(inputs && Array.isArray(inputs)) {

    // Iterate through each input
    inputs.map(inputFactory);

  } else {

    // TODO: Throw invalid inputs argument

  }

}

// Factory for building different input types
let inputFactory = (input) => {

  // Currently accepted input types
  let acceptedInputTypes = [
    'select', 'label', 'reset', 'submit', 'text', 'email', 'password', 'hidden'
  ];

  // Check if input type is accepted or throw exception
  if(input.type && acceptedInputTypes.includes(input.type)) {

    let outputString = "";

    // Route input types to correct build method
    switch(input.type) {

      case 'select':
        outputString = buildSelect(input);
        break;

      case 'label':
        outputString = buildLabel(input);
        break;

      case 'reset':
      case 'submit':
        outputString = buildInputButton(input);
        break;

      default:
        outputString = buildInput(input);
    }

    console.log(outputString);

  } else {

    console.log('INVALID');
    // TODO: Throw invalid input type exception

  }

}

// Builds a select element
let buildSelect = (input) => {
  // TODO
}

// Builds a label element
let buildLabel = (input) => {
  // TODO
}

// Builds an input button element
let buildInputButton = (input) => {

  // Check if value or throw exception
  if(input.value) {
    return `<p><input type="${input.type}" value="${input.value}" /></p>`;
  }

  // TODO: Thow error if no value
}

// Builds an input element
let buildInput = (input) => {

  let outputString = `<input type="${input.type}"`;
  // Check if name or throw exception
  if(input.name) {
    outputString += ` name="${input.name}"`;
  } else {
    // TODO: Thow error if no name
  }

  // Add value if exists
  if(input.value) {
    outputString += ` value="${input.value}"`;
  }

  // Add input closing
  outputString += ' />';

  // Add label if exits
  if(input.label) {
    outputString = `<label>${input.label} ${outputString}</label>`;
  }

  // Wrap in paragraph
  outputString = `<p>${outputString}</p>`;

  return outputString;
}

// Dummy data. TODO: remove before production.
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
    label: 'Password',
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
