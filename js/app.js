/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //declare some global variables
 const startButton = document.getElementById("btn__reset");
 const phraseDisplay = document.querySelector("#phrase ul");
 const phraseLetters = document.getElementsByClassName("hide letter");
 const keyboardLetters = document.getElementsByClassName("key");
 const body = document.getElementsByTagName("body");
 let game;
 let phrase;



const intro = document.getElementById("intro");
const welcome = document.getElementById("welcome");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
function playAudio(x) {
  x.play();
}
 startButton.addEventListener("click" , () => {

   game = new Game(thephrases); //instantiate new Game object
   game.startGame(); //call startGame method
   playAudio(welcome);
   console.log(game.activePhrase);


});
