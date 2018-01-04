# NodeFormBuilder
A quick and basic way to generate dynamic forms in HTML with Node.
Currently only provides basic support for 'select', 'label', 'reset', 'submit', 'text', 'email', 'password', and 'hidden' elements.

## Usage

TODO: Insert install instructions

### Creating a form
A form can be created by using the `buildForm({inputs}, [action, method])`
function. This method supports 3 arguments:
+ **inputs** - This is a required array of input objects, see the below section
for what is needed for each input.
+ **action** - This is optional and the same as HTML's form tag's action
attribute. Default: `false`
+ **method** - This is optional and the same as HTML's form tag's method
attribute. Default: `'GET'`
