// constructor function for creating letter objects
var Words = function(word) {
  wordsArray = ["Ben is Cool",]
  // this.students will hold all of our student objects
  this.words = word; 
  this.index = index;
  // a method that checks the letter is in the word using our word constructor.
  // It then pushes the new letter object to this.letters
  this.wordfunc = function(x, y, z) {
    this.words.push(new Words(x, y, z));
  };
  // this method will tell you how many letters are in the word
  this.pickword = function(){
    var randNo = Math.floor(Math.random() * wordsArray.length);
    var chosenWord = wordsArray[randNo];
    return chosenWord;
}

};

// exporting our Letters constructor. We will require it in index.js
module.exports = Words;
