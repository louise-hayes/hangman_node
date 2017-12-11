var Words = require("./word.js");

var randomWordFunc = new Words(["ADAM","BEN","OISIN"]);


console.log(randomWordFunc.pickWord());

var chosenword = randomWordFunc.pickWord();
console.log(chosenword);

