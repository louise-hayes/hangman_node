// hangman game in node using inquirer npm packages and constructors
console.log("in business");
var inquirer = require("inquirer");

var userword = ["_", "_", "_"];
var match = false;
var wins = 0;
var lettersMatched = 0;

init();

// Take in user input

function init() {
  inquirer
    .prompt({
      name: "letter",
      type: "input",
      message: "Guess a Letter"
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      var testword = "BEN";
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