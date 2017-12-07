// constructor function for creating letter objects
var Words = function(word) {
  // this.students will hold all of our student objects
  this.words = ["Ben Is Cool" , "Adam Rocks" , "Mom is Ace"];
  this.index = index;
  // a method that checks the letter is in the word using our word constructor.
  // It then pushes the new letter object to this.letters
  this.wordfunc = function(x, y, z) {
    this.words.push(new Words(x, y, z));
  };
  // this method will tell you how many letters are in the word
  this.randomWord = function() {
    for (i=0;i<words.length;i++){

    
    return this.words.length;
    }
  };
};

// exporting our Letters constructor. We will require it in index.js
module.exports = Words;
