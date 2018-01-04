let FormBuilder = require('./index.js');

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
FormBuilder.buildForm(testFields, 'luke.com');
