# NodeFormBuilder
A quick and basic way to generate dynamic forms in HTML with Node.
Currently only provides basic support for 'text', 'email', 'password', 'hidden', 'select', 'label', 'reset', and 'submit', elements.

## Usage

TODO: Insert install instructions

### Creating a form
A form can be created by using the `buildForm({inputs}, [action, method])`
function. This method supports 3 arguments:
+ **{inputs}** - Required array of input objects, see the below section
for what is needed for each input.
+ **[action]** - Optional. Same as HTML's form tag's action attribute.
Default: `false`
+ **[method]** - Optional. Same as HTML's form tag's method attribute.
Default: `'GET'`

### Creating input elements
Each input can be passed to the input argument as an item in an array.

#### Text, Email, Password, Hidden
##### Properties: #####
+ **{name}** - Required. Same as HTML's input tag's name attribute.
+ **{type}** - Required. Same as HTML's input tag's type attribute.
Value must be `text`, `email`, `password`, or `hidden`.
+ **[value]** - Optional. Same as HTML's input tag's value attribute.
+ **[label]** - Optional. Wraps the input tag in a label with string.

##### Example: #####

**Input object:**
```javascript
  {
    name: 'firstName',
    type: 'text',
    value: 'Luke',
    label: 'First Name'
  }
```

**Output as HTML:**
```html
  <label>
    First Name
    <input type="text" name="firstName" value="Luke" />
  </label>
```

#### Select
##### Properties: #####
+ **{name}** - Required. Same as HTML's select tag's name attribute.
+ **{type}** - Required. Value must be `select`.
+ **{options}** - Required. Array of objects.
  + **{value}** - Required. Same as HTML's option tag's value attribute.
  + **{label}** - Required. Name visible in dropdown.
+ **[label]** - Optional. Wraps the select tag in a label with string.

##### Example: #####

**Input object:**
```javascript
  {
    name: 'colors',
    type: 'select',
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
    ],
    label: 'Colors'
  }
```

**Output as HTML:**
```html
  <label>
    Colors
    <select name="colors">
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="blue">Blue</option>
    </select>
  </label>
```

#### Label
##### Properties: #####
+ **{type}** - Required. Value must be `label`.
+ **{value}** - Required. Wraps string in label.

##### Example: #####

**Input object:**
```javascript
  {
    type: 'label',
    value: 'Some random label!'
  }
```

**Output as HTML:**
```html
  <label>Some random label!</label>
```

#### Reset, Submit
##### Properties: #####
+ **{type}** - Required. Same as HTML's input tag's type attribute.
Value must be `reset` or `submit`.
+ **{value}** - Required. Same as HTML's input tag's value attribute.

##### Example: #####

**Input object:**
```javascript
  {
    type: 'reset',
    value: 'Reset Form'
  }
```

**Output as HTML:**
```html
  <button type="reset" value="Reset Form" />
```
