// hangman game in node using inquirer npm packages and constructors
var inquirer = require("inquirer");
// var gameWord = require("./word.js");
//this will be populated in a constructor function pickWord
var userWord = ["_", "_", "_", " ", "_", "_", "_", "_", "_"];
var flagMatch = false; //if True - if they get the letter right, a message will display to user you are correct
var cntrWins = 0; //incremented each time they get a phrase corretct
var cntrLettersMatched = 0; //this counter will be set to length of the phrase to determine how many times we prompt fuser or a letter 
var lettersUsed = [];
const totalGuesses = 8;
var guessesRemaining = totalGuesses;

init(); //call the game function

// prompt for user letter - and accept user letter
console.log(userWord);

function init() {

  inquirer
    .prompt({
      name: "letter",
      type: "input",
      message: "Make a guess by typing in any letter!"
    })
    .then(function (answer) {


      // if (lettersUsed.indexOf(answer.letter) == -1 || (guessesRemaining === totalGuesses)) {

      //   console.log("letter not typed already or first time" + lettersUsed.indexOf(answer.letter));
      // }

      // IsLetterInRandomWord(letter, 0);
      // showGuess();
      // lettersUsed.push(letter);

      //this will be chosen in a constructor function
      //if it has alread been entered ignore this
      var testword = "BEN HAYES";

      match = false;
      var userLetter = answer.letter.toUpperCase();

      if (!(testword.indexOf(userLetter) == -1)) {

        for (var i = 0; i < testword.length; i++) { //loop until length of word and check if user letter is in game word

          if (userLetter === testword[i]) {
            var index = testword.indexOf(userLetter, i);
            userWord[index] = userLetter;
            console.log(index + " " + userWord[index]);
            console.log("You are correct " + userWord);
            match = true;

            cntrLettersMatched++; //when this is same as word length we stop asking for letter

            if (cntrLettersMatched === testword.length) {
              console.log("you win..Here is the next round..");
              userWord = ["_", "_", "_", " ", "_", "_", "_", "_", "_"];


            };
            // correctAns();
          } //end if match
          //eitherway check if max tries is reached and if not max tries 
          // (which is length of word) then call init again to repeat        
        }; //end for

        if (!(match)) {
          console.log("incorrect " + userword);
        }
        if (!(i === testword.length - 1)) {

          init();
        }
      } //end if
    }); // end .then


    
} //end init