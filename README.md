# hangman_node

Game hangman (Node/Constructrs)
Files: index.js, letters.js, word.js
A node.js command line App that uses 'inquirer' npm to prompt for user letter.
Use of constructor objects to handle letter and word functions


Instructions: node index.js 

Output: 

Number of Wins: 0
Here is the word: _,_,_,_,_,_,_,_,_,_
Make a guess by typing in any letter!

Enter any letter to start the game
Game will restart automatically once you win or loose
You will have 10 lives.
The lives will be deprecated each wrong letter entered

Code Sequence:
A random word will be chosen from an array of words, using a Word.pickWord()  constructor function.

This letter is then parsed to Upper Case in a Letter.toUpper() constructor function

Next a function checkletter() will run and will call IsLetterInRandomWord() to see if letter is in random word

showGuess() is a function that is called throughout to display to the user  current letters guessed
