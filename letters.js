// constructor function for creating letter objects
var Letters = function(letter, index) {
  // this.students will hold all of our student objects
  this.letter = [];
  this.index = index;
  // a method that checks the letter is in the word using our word constructor.
  // It then pushes the new letter object to this.letters
  this.checkLetter = function(x, y, z) {
    this.letters.push(new Letters(x, y, z));
  };
  // this method will tell you how many letters are in the word
  this.letterCount = function() {
    return this.letters.length;
  };
};

// exporting our Letters constructor. We will require it in index.js
module.exports = Letters;
