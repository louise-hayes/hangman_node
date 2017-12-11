// constructor function for creating letter objects
function Letters(l) {

  this.letter = l;
  // this.guessWord = "Test";


  this.toUpperLetter = function () {
    var upperCaseLetter = this.letter.toUpperCase();
    return upperCaseLetter;
    console.log("upper case is " + this.letter.toUpperCase());

  };

  this.showLetter = function () {
    // var guessWord="TEST";
    console.log(this.letter + " in here");
    // return this.letter.length;

  };
};

// exporting our Letters constructor. We will require it in index.js
module.exports = Letters;