// in the requiring file simply add these lines 
var User = require('./constructorstuff.js');

var louise = new User('Louise Hayes');
// bob.name;
louise.sayHi(); // "Hi, My name is Bob"

console.log(louise.name);