let FormBuilder = require('./FormBuilder.js');

 let inputs = [
   { name: 'name', type: 'text', label: 'Name' },
   { name: 'email', type: 'email', label: 'Email' },
   { name: 'password', type: 'password', label: 'Password' },
   { name: 'csrf', type: 'hidden', value: 'wgPbQMS_fJL@RO6ZTwc-nmS1$1a7R9L(' },
   { type: 'submit', value: 'Send Form' },
	 // { name: 'test', type: 'misc'},
	 // { name: 'test2', type: 'TEXT'},
	 { name: 'test2', type: 'text'},
 ];
 FormBuilder.buildForm(inputs, 'example.com', 'POST');
 
 
 // Nicole Cayouette
 // code review comments
 
 // Line 15: I like the type check here. Didn't even think to do that - obviously under thinking it. Good job.
 // Line 41: Great use of the methods to create the different inputs. Your code isn't repetitive at all. Very efficient. *Suggest using a unifier like .toLowerCase or something in order to save an error if the CaSe doesn't match. For example: "{ name: 'test2', type: 'TEXT'}," throws an error when it should be allowed.
 // 138: *Suggest giving the user the valid information and an error message. Might be more clear for a succesful future use.
 
 // Overall, I really like this component. The use of es6 and reusable parts is efficient and clean. Great job.
 