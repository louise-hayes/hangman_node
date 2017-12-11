var Letters = require("./letters.js");

var userLetter = new Letters("adam");

userLetter.showLetter();

var uppercaseletter = userLetter.toUpperLetter();
console.log(uppercaseletter);

console.log(userLetter.toUpperLetter())
