

// The constructor simply defines the type 

function User(n) {
    this.name = n;
}
var phil = new User('Phil');

// while the prototype describes the behavior

User.prototype.sayHi = function() {
    console.log('Hi, My name is ' + this.name);
};

phil.sayHi(); // "Hi, My name is Bob"

//export the constructor for otehr apps to use
module.exports = User;
// bob.name;

// if you need to access these in the app simply add these lines
// var User = require('User');
// var bob = new User('Bob');



// **************RegEXP stuff - if static use literal otherwise if dynamic use constructor method

// var regexLiteral = /cat/;

var regexConstructor = new RegExp("Cat Woman");

var str1 = "cat";
var str2 = "dog";

// const hasCat = /cat/; or
var hasCat = new RegExp("cat");

console.log(hasCat.test(str1));

// true
console.log(hasCat.test(str2));
// false
var letter = / + "c" + /;

console.log(letter.test('cat'));
