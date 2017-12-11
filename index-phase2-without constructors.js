var inquirer = require("inquirer");
// variables ***************************************

var wordsArray = ["picture", "sunny", "adam", "ben", "codersrock", "oisin"];
var guessWord;
var lettersUsed = [];
var winCntr = 0;
const totalGuesses = 10;
var guessesRemaining = totalGuesses;

// .split --will split the string into an array using what ever seperator you specify, in this case '' blank, so everything is seperated
//come back to this to present user with a visual of alphabet
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(alphabet);

var letter = "";
var hasWon = 0;
var randomWord;
//Functions *****************************************

//  find a random word from the wordsArray. Returns a random word
function pickword() {
    var randNo = Math.floor(Math.random() * wordsArray.length);
    var chosenWord = wordsArray[randNo];
    return chosenWord;
}

// return event - the letter!
function checkLetter(letter) {
    if (guessesRemaining !== 0) {
        //console.log(letter);
        var posIndex = 0;
        // console.log(" Number of Wins: " + winCntr);
        // console.log("Guesses Remaining: " + guessesRemaining);

        if (lettersUsed.indexOf(letter) == -1 || (guessesRemaining === totalGuesses)) {

            //console.log("letter not typed already or first time" + lettersUsed.indexOf(letter));
        }
        IsLetterInRandomWord(letter, 0);
        showGuess();
        lettersUsed.push(letter);

    }

}

// Is player letter in randomWord
function IsLetterInRandomWord(letter, checkIndex) {
    // check for falsey which is if its first letter of the randomWord so index 0

    if (checkIndex < randomWord.length && randomWord.indexOf(letter, checkIndex) !== -1) {

        // letter is in the randomWord
        // console.log("Correct!");
        // Populate the guessed letter into the guessWord in right position

        // if a letter is in the array twice you must place it twic so
        // so you need to check is this letter in the random word more than once
        // recursive function - if match call itself again and pass another arg called position and use that to check with that position until its false.
        // 
        checkIndex = randomWord.indexOf(letter, checkIndex);
        // console.log("letter " + "checkIndex " + checkIndex);
        guessWord[checkIndex] = letter;

        //check if it is in the word multiple times in guessWorda recursive function 


        IsLetterInRandomWord(letter, checkIndex + 1);
        return true;
    } else if (guessesRemaining == 1 && checkIndex == 0) {
        showGuess();
        console.log("You have lost...The winning word was: " + randomWord);

        init();
    } else if (checkIndex == 0) {
        if (lettersUsed.indexOf(letter) == -1 || (guessesRemaining === totalGuesses)) {

            // console.log("letter not typed already or first time" + lettersUsed.indexOf(letter));
            lettersUsed.push(letter);
            console.log("Incorrecr - try again!");
            guessesRemaining--;
            var win = false;

        }
    }



    return false;

}

// show guess in div guess
function showGuess() {
    var guessString = "";
    for (var i = 0; i < guessWord.length; i++) {
        guessString = guessString + guessWord[i] + ",";
    }
    console.log("Word : " + guessString.substring(0, guessString.length - 1));
    //console.log(" Guesses Remaining: " + guessesRemaining);
    if (guessWord.join("") == randomWord) {
        winCntr++;
        guessesRemaining = totalGuesses;
        //console.log(" Guesses Remaining: " + guessesRemaining);
        console.log("Well Done...The winning word was: " + randomWord);
        init();

    }

}

// called when reset button clicked
// function resetButton() {
//     console.log("resetting");

//     init();
// }

function getUserLetter() {
    // show guessWord here come back to it

    inquirer
        .prompt({
            name: "letter",
            type: "input",
            message: "Make a guess by typing in any letter!"
        })
        .then(function (answer) {
            var userLetter = answer.letter;
            checkLetter(userLetter);
            // console.log("chosen random word is " + randomWord);
            // populate guessWord with dashes 

            // showGuess();
            console.log(" Guesses Remaining: " + guessesRemaining);
            getUserLetter();
        }); // end .then

};

// Begin //
function init() {
    guessWord = [];
    lettersUsed = [];
    letter = "";
    guessesRemaining = totalGuesses;
    randomWord = pickword();
    // console.log("chosen random word is " + randomWord);
    console.log(" Number of Wins: " + winCntr);

    for (var i = 0; i < randomWord.length; i++) {
        guessWord.push('_');
    }
    console.log("Here is the word: " + guessWord);
}

init();
getUserLetter();