// Main function to build the complete form
let buildForm = (inputs) => {

  // Check if inputs variable is an array or throw exception
  if(inputs && Array.isArray(inputs)) {

    // Iterate through each input
    let outputString = inputs.map(inputFactory).join('');

    console.log(outputString);

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

    // Route input types to correct build method
    switch(input.type) {

      case 'select':
        return buildSelect(input);
        break;

      case 'label':
        return buildLabel(input);
        break;

      case 'reset':
      case 'submit':
        return buildInputButton(input);
        break;

      default:
        return buildInput(input);
    }

  } else {

    // TODO: Throw invalid input type exception

  }

}

// Builds a select element
let buildSelect = (input) => {

  // Check if name and options array or throw exception
  if(input.name && input.options && Array.isArray(input.options)) {

    // Builds a string to return
    let outputString = `<select name="${input.name}">`;

    outputString += input.options.map(buildOption).join('');

    outputString += '</select>';

    if(input.label) {
      outputString = `<label>${input.label} ${outputString}</label>`;
    }

    outputString = `<p>${outputString}</p>`;

    return outputString;

  }

  // TODO: Thow error if no name

}

// Builds an option element
let buildOption = (option) => {

  // Check if value and label or throw exception
  if(option.value && option.label) {
    return `<option value="${option.value}">${option.label}</option>`;
  }

  // TODO: Thow error if no value or label
}

// Builds a label element
let buildLabel = (input) => {

  // Check if value or throw exception
  if(input.value) {
    return `<p><label>${input.value}</label></p>`;
  }

  // TODO: Thow error if no value
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

  // Check if name or throw exception
  if(input.name) {

    // Builds a string to return
    let outputString = `<input type="${input.type}" name="${input.name}"`;

    if(input.value) {
      outputString += ` value="${input.value}"`;
    }

    outputString += ' />';

    if(input.label) {
      outputString = `<label>${input.label} ${outputString}</label>`;
    }

    outputString = `<p>${outputString}</p>`;

    return outputString;

  }

  // TODO: Thow error if no name

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
  },
  {
    type: 'label',
    value: 'Some random label!'
  },
  {
    name: 'colors',
    type: 'select',
    label: 'Colors',
    options: [
      {
        value: 'red',
        label: 'Red'
      },
      {
        value: 'yellow',
        label: 'Yellow'
      },
      {
        value: 'blue',
        label: 'Blue'
      }
    ]
  }
]
buildForm(testFields);
