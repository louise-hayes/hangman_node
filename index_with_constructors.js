// hangman game in node using inquirer npm packages and constructors
var inquirer = require("inquirer");
var Words = require("./word.js");




var match = false;
var wins = 0;
var lettersMatched = 0;

init();

// Take in user input
//PickRandomWord
    

function init() {
  inquirer
    .prompt({
      name: "letter",
      type: "input",
      message: "Guess a Letter"
    })
    .then(function (answer) {
        words.pickword(testword);

      match = false;
      var userletter = answer.letter.toUpperCase();

      for (var i = 0; i < testword.length; i++) {
        if (userletter === testword[i]) {
          var index = testword.indexOf(userletter);
          userword[index] = userletter;
          console.log(index + " " + userword[index]);
          console.log("correct " + userword);

          match = true;
          lettersMatched++;
          if (lettersMatched === testword.length) {
            console.log("you win..Here is the next round..");
            userword = ["_", "_", "_"];
            
          };
          // correctAns();
        } //end if match
        //eitherway check if max tries is reached and if not max tries (which is length of word) then call init again to repeat
        
          
        

        
        
        
      }; //end for
      if (!(match)) {
      console.log("incorrect " + userword);
      }
      if (!(i === testword.length - 1)) {
        
        init();
      }
    }); // end .then
} //end init