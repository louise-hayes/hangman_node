// constructor function for creating letter objects
function Words(wordsArray) {
  
  // this.randomWord will hold our phrase for user to guess
  this.wordsArray = wordsArray; 
  
  // this method will tell you how many letters are in the word
  

  this.pickWord = function() {
    var randNo = Math.floor(Math.random() * this.wordsArray.length);
    var chosenWord = this.wordsArray[randNo];
    return chosenWord;
  };



};


// exporting our Letters constructor. We will require it in index.js
module.exports = Words;

